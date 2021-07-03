//
//  ViewController.swift
//  VoteApp
//
//  Created by Nikhil Pitta on 7/1/21.
//

import UIKit
import GoogleMaps

class Destination: NSObject {
    
    let name: String
    let location: CLLocationCoordinate2D
    let zoom: Float
    let carTime: String
    let walkTime: String
    let latitude: Float
    let longitude: Float
    
    init(name: String, location: CLLocationCoordinate2D, zoom: Float, carTime: String, walkTime: String, latitude: Float, longitude: Float) {
        self.name = name
        self.location = location
        self.zoom = zoom
        self.carTime = carTime
        self.walkTime = walkTime
        self.latitude = latitude
        self.longitude = longitude
    }
}


class ViewController: UIViewController {

    var mapView: GMSMapView?
    var currentDestination: Destination?
    
    @IBOutlet weak var searchButton: UIButton!
    
    var infoView: UIView = UIView()
    var infoLabel: UILabel = UILabel()
    var carLabel: UILabel = UILabel()
    var walkLabel: UILabel = UILabel()

    
    let destinations = [
            Destination(name: "Cupertino City Hall", location: CLLocationCoordinate2DMake(37.319144717865996, -122.02863907345126), zoom: 15, carTime: "4 min", walkTime: "26 min", latitude: 37.369861, longitude: -121.957853),
            
            Destination(name: "Quinlan Community Center", location: CLLocationCoordinate2DMake(37.32593904808301, -122.04239354443652), zoom: 15, carTime: "7 min", walkTime: "27 min", latitude: 37.32593904808301, longitude: -122.04239354443652),
            
            Destination(name: "Los Altos City Hall", location: CLLocationCoordinate2DMake(37.38181818334112, -122.11365211559884), zoom: 15, carTime: "15 min", walkTime: "2 hr 37 min", latitude: 37.38181818334112, longitude: -122.11365211559884),
            
            Destination(name: "Santa Clara County Civic Center", location: CLLocationCoordinate2DMake(37.352878478231254, -121.90370561745314), zoom: 15, carTime: "18 min", walkTime: "3 hr 3 min", latitude: 37.352878478231254, longitude: -121.90370561745314),
            
            Destination(name: "Monta Vista High School", location: CLLocationCoordinate2DMake(37.31560281807005, -122.05623850041759), zoom: 15, carTime: "6 min", walkTime: "30 min", latitude: 37.31560281807005, longitude: -122.05623850041759),

            Destination(name: "San Jose City Hall", location: CLLocationCoordinate2DMake(37.343275833355264, -121.8835632320888), zoom: 15, carTime: "20 min", walkTime: "3 hr 21 min", latitude: 37.343275833355264, longitude: -121.8835632320888),
            
            Destination(name: "Temple United Methodist Church", location: CLLocationCoordinate2DMake(37.73578602763953, -122.47520251955359), zoom: 15, carTime: "38 min", walkTime: "13 hr 25 min", latitude: 37.73578602763953, longitude: -122.47520251955359),
            
            Destination(name: "Ingleside Police Station", location: CLLocationCoordinate2DMake(37.74710850313852, -122.44321520572383), zoom: 15, carTime: "41 min", walkTime: "13 hr 54 min", latitude: 37.74710850313852, longitude: -122.44321520572383),
            
            Destination(name: "Ocean View Library", location: CLLocationCoordinate2DMake(37.73072829897481, -122.46384767559421), zoom: 15, carTime: "39 min", walkTime: "13 hr 36 min", latitude: 37.73072829897481, longitude: -122.46384767559421),

            Destination(name: "Lynbrook High School", location: CLLocationCoordinate2DMake(37.30119037994725, -122.00466634903496), zoom: 15, carTime: "6 min", walkTime: "33 min", latitude: 37.30119037994725, longitude: -122.00466634903496)
            ]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        GMSServices.provideAPIKey("AIzaSyCESrf6B5bXO2i3DauI1QGrqJfONi9qj_c")
        
        let camera = GMSCameraPosition.camera(withLatitude: 37.308967, longitude: -122.038853, zoom: 15)
        mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
        view = mapView
        
        let button = UIButton()
        button.backgroundColor = UIColor(red: 103/255, green: 210/255, blue: 104/255, alpha: 1)
        button.tintColor = .white
        button.frame = CGRect(x: 295, y: 70, width: 75, height: 75)
        button.setImage(UIImage(systemName: "magnifyingglass"), for: .normal)
        button.layer.cornerRadius = 35
        button.addTarget(self, action: #selector(searchButtonClicked), for: .touchUpInside)
        button.showsTouchWhenHighlighted = true
        mapView?.addSubview(button)
        
        let currentLocation = CLLocationCoordinate2D(latitude: 37.308967, longitude: -122.038853)
        let marker = GMSMarker(position: currentLocation)
        marker.icon = UIImage(named: "currentLocation")
        marker.title = "Current Location"
        marker.map = mapView
        
        infoView = UIView(frame: CGRect(x: 25, y: 610, width: 350, height: 130)) // x: -5, y: -20
        infoView.backgroundColor = .systemBackground
        infoView.layer.cornerRadius = 40
        mapView?.addSubview(infoView)
        
        infoLabel = UILabel(frame: CGRect(x: 0, y: 15, width: 350, height: 30))
        infoLabel.text = "Cupertino City Hall"
        infoLabel.textAlignment = NSTextAlignment.center
        infoLabel.font = UIFont(name: "Futura", size: 20)
        infoView.addSubview(infoLabel)
        
        let carImageView = UIImageView(frame: CGRect(x: 25, y: 50, width: 30, height: 25))
        carImageView.image = UIImage(systemName: "car.fill")
        carImageView.tintColor = .gray
        infoView.addSubview(carImageView)
        
        let walkImageView = UIImageView(frame: CGRect(x: 25, y: 80, width: 30, height: 25))
        walkImageView.image = UIImage(named: "walk")
        walkImageView.tintColor = .gray
        infoView.addSubview(walkImageView)
        
        carLabel = UILabel(frame: CGRect(x: 65, y: 47, width: 100, height: 30))
        carLabel.text = "15 min"
        carLabel.font = UIFont(name: "Futura", size: 15)
        carLabel.textColor = .gray
        infoView.addSubview(carLabel)
        
        walkLabel = UILabel(frame: CGRect(x: 65, y: 77, width: 100, height: 30))
        walkLabel.text = "30 min"
        walkLabel.font = UIFont(name: "Futura", size: 15)
        walkLabel.textColor = .gray
        infoView.addSubview(walkLabel)
        
        let directionsButton = UIButton()
        directionsButton.backgroundColor = UIColor(red: 103/255, green: 210/255, blue: 104/255, alpha: 1)
        directionsButton.tintColor = .white
        directionsButton.frame = CGRect(x: 156, y: 55, width: 154, height: 50)
        directionsButton.setTitle("   Directions", for: .normal)
        directionsButton.contentHorizontalAlignment = .left
        directionsButton.titleLabel?.font = UIFont(name: "Futura", size: 16)
        directionsButton.layer.cornerRadius = 20
        directionsButton.addTarget(self, action: #selector(directionsButtonClicked), for: .touchUpInside)
        directionsButton.showsTouchWhenHighlighted = true
        infoView.addSubview(directionsButton)
        
        let directionsImageView = UIImageView(frame: CGRect(x: 266, y: 67, width: 30, height: 25))
        directionsImageView.image = UIImage(systemName: "car.fill")
        directionsImageView.tintColor = .white
        infoView.addSubview(directionsImageView)
        
        infoView.isHidden = true
        
        
  
    }
    
    @objc func directionsButtonClicked(sender: UIButton) {
        if (UIApplication.shared.canOpenURL(URL(string:"comgooglemaps://")!)) {
            UIApplication.shared.open(URL(string:"comgooglemaps://?center=\(37.308967),\(-122.038853)&zoom=14&views=traffic&q=\(currentDestination!.location.latitude),\(currentDestination!.location.longitude)")!, options: [:], completionHandler: nil)
        } else {
            print("Can't use comgooglemaps://")
        }
    }
    
    @objc func searchButtonClicked(sender: UIButton) {
        if currentDestination == nil {
            currentDestination = destinations.first
            
        } else {
            
            if let index = destinations.firstIndex(of: currentDestination!) {
                if (index + 1) < destinations.count {
                    currentDestination = destinations[index + 1]
                } else {
                    currentDestination = destinations.first
                }
            }
        }
        
        setMapCamera()
        
        
        infoLabel.text = currentDestination?.name
        carLabel.text = currentDestination?.carTime
        walkLabel.text = currentDestination?.walkTime
        infoView.isHidden = false
    }
    
    private func setMapCamera() {
        
        CATransaction.begin()
        CATransaction.setValue(2, forKey: kCATransactionAnimationDuration)
        
        mapView?.animate(to: GMSCameraPosition.camera(withTarget: currentDestination!.location, zoom: currentDestination!.zoom))
        
        CATransaction.commit()
        
        let marker = GMSMarker(position: currentDestination!.location)
        //marker.icon = UIImage(named: "currentLocation")
        marker.title = currentDestination?.name
        marker.map = mapView
        
        
    }

}

