//
//  ProfileViewController.swift
//  VotingApp
//
//  Created by Kyle Kumar on 6/28/21.
//

import UIKit
import FirebaseDatabase

class ProfileViewController: UIViewController {

    var email:String?
    @IBOutlet weak var emailTextView: UILabel!
    @IBOutlet weak var locationTextView: UILabel!
    @IBOutlet weak var dateTextView: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    override func viewWillAppear(_ animated: Bool) {
        let ref = Database.database().reference()
        
        emailTextView.text = email!
        let username = email!.replacingOccurrences(of: ".", with: "-")
        
        ref.child(username).observeSingleEvent(of: .value) { (snapshot) in
            let userData = snapshot.value as! [String:Any]
            let appointment1 = userData["Appointment1"] as! Dictionary<String, String>
            self.locationTextView.text = appointment1["location"] as! String
            self.dateTextView.text = appointment1["date"] as! String
        }
        
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
