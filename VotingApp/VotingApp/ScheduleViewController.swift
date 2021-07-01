//
//  ScheduleViewController.swift
//  VotingApp
//
//  Created by Kyle Kumar on 6/28/21.
//

import UIKit

class ScheduleViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource{

    var email: String?
    @IBOutlet weak var locationPicker: UIPickerView!
    @IBOutlet weak var datePicker: UIDatePicker!
    var locationSelected: String = ""
    var dateSelected: String = ""
    
    let data = ["Regnart", "Kennedy", "Monta Vista"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        datePicker.addTarget(self, action: #selector(ScheduleViewController.handler(sender:)), for: UIControl.Event.valueChanged)

    }
    override func viewWillAppear(_ animated: Bool) {
        locationPicker.delegate = self
        locationPicker.dataSource = self
    }
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }
    
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return self.data.count
    }
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        return self.data[row]
    }
    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        self.locationSelected = self.data[row]
    }
    @objc func handler(sender: UIDatePicker) {
        self.dateSelected = "\(datePicker.date)"
        let dateFormatter = DateFormatter()
        dateFormatter.timeZone = .current
        dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ssZ"
        self.dateSelected = dateFormatter.string(from: self.datePicker.date)
    }
    
    
    @IBAction func createVotingPlan(_ sender: Any) {
        var time = self.dateSelected.dropFirst(11).prefix(5)
        
        if(Int(time.prefix(2))! > 12){
            time = String(Int(time.prefix(2))!-12) + time.dropFirst(2) + " PM"
        }else{
            time = String(Int(time.prefix(2))!) + time.dropFirst(2) + " AM"
        }
        
        let dateToSend = self.dateSelected.dropFirst(5).prefix(2) + "/" + self.dateSelected.dropFirst(8).prefix(2) + "/" + self.dateSelected.prefix(4) + " " + time
        
        print("Date Selected: " + dateToSend)
        print("Location Selected: " + locationSelected)
    }
    

}
