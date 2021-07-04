# VotingApp
# ![alt text](https://github.com/adithyachan/RecycleHub/blob/master/RecycleHub/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20%402x.png "RecycleHub Logo") RecycleHub

Helps make recycling easier (and more fun) by using a neural network to detect what type of trash a user takes an image of. Also gives an estimated dollar amount that the user could recieve for recycling the item and points the user to a nearby recycling plant. 

# Installation

1. Clone the repository with `git clone https://github.com/adithyachan/RecycleHub.git` 

2. Navigate to `RecycleHub/` and install the necesary libraries with `pod install`

3. Open `RecycleHub.xcworkspace` with Xcode, select the iPhone 11 emulator, and run the app.


# Dependencies


For the IOS app:

It is highly recommended that google maps is installed on the device to take full advantage of the map features.

For recycle_net.py:
- Python 3.8
- torchvision-0.6.1
- torch-1.5.1
- Pillow-7.2.0
- numpy-1.19.0

These can be installed with `pip install torchvision`, assuming you are running an updated version of pip and Python 3.8

# References

The image used to train the model was obtained from [Kaggle](https://www.kaggle.com/asdasdasasdas/garbage-classification)
