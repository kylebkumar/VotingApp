//
//  TabViewController.swift
//  VotingApp
//
//  Created by Kyle Kumar on 6/28/21.
//

import UIKit

class TabViewController: UIViewController {

    @IBOutlet weak var contentView: UIView!
    
    @IBOutlet var buttons: [UIButton]!
    
    @IBOutlet weak var tabView: UIView!
    
    var quickSearchViewController: UIViewController!
    var mapViewController: UIViewController!
    var statisticsViewController:UIViewController!
    
    
    var viewControllers: [UIViewController]!
    
    var selectedIndex: Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        
        quickSearchViewController = storyboard.instantiateViewController(withIdentifier: "profileScreen")
        mapViewController = storyboard.instantiateViewController(withIdentifier: "mapScreen")
        statisticsViewController = storyboard.instantiateViewController(withIdentifier: "scheduleScreen")
        
        viewControllers = [quickSearchViewController, mapViewController, statisticsViewController]
        
        buttons[selectedIndex].isSelected = true
        didPressTab(buttons[selectedIndex])
        self.view.bringSubviewToFront(tabView)
    }
    
    @IBAction func didPressTab(_ sender: UIButton) {
        let previousIndex = selectedIndex
        selectedIndex = sender.tag
        
        buttons[previousIndex].isSelected = false
        let previousVC = viewControllers[previousIndex]
        previousVC.willMove(toParent: nil)
        previousVC.view.removeFromSuperview()
        previousVC.removeFromParent()
        
        sender.isSelected = true
        let vc = viewControllers[selectedIndex]
        addChild(vc)
        vc.view.frame = contentView.bounds
        contentView.addSubview(vc.view)
        vc.didMove(toParent: self)
        self.view.bringSubviewToFront(tabView)
        
    }
    
    
}
