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
        //NOTE: This entire code segment will likely break if the user does not have data assosiated with their account
        let ref = Database.database().reference()
        
        emailTextView.text = email!
        //converting the email to a username (swap the '.' with a '-' to make Firebase happy)
        let username = email!.replacingOccurrences(of: ".", with: "-")
        
        //NOTE: see Realtime Database on Firebase to see how the data is formatted on their end
        ref.child(username).observeSingleEvent(of: .value) { (snapshot) in
            //get the data corresponding to the email of the user
            let userData = snapshot.value as! [String:Any]
            //cast the user's data as a dictionary (hard-coded to get their first appointment)
            let appointment1 = userData["Appointment1"] as! Dictionary<String, String>
            //cast the values in the dictionary into strings and put them in the text-views
            if(appointment1["location"]! != ""){
                self.locationTextView.text = appointment1["location"]!
            }
            if(appointment1["date"]! != ""){
                self.dateTextView.text = appointment1["date"]!
            }
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
