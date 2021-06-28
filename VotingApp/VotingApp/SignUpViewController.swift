//
//  SignUpViewController.swift
//  VotingApp
//
//  Created by Kyle Kumar on 6/27/21.
//

import UIKit

class SignUpViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        print("Sign up view controller loaded")
    }
    
    
    @IBAction func signUp(_ sender: Any) {
        performSegue(withIdentifier: "loginSegue", sender: self)
    }
    
    
}

