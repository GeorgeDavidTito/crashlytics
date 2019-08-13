fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios beta
```
fastlane ios beta
```
Increments the build number, submits this new version to TestFlight and commits the version bump
### ios dev
```
fastlane ios dev
```
Exports an ipa file to the project root directory named crashlytics.ipa
### ios update_bundle_identifier
```
fastlane ios update_bundle_identifier
```
Update Bundle Identifier

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
