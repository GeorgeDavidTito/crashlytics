crashlytics
====================================

# Prerequisites

Follow the [official guide](https://facebook.github.io/react-native/docs/getting-started.html) to properly setup your environment.
We highly recommend using [nvm](https://github.com/creationix/nvm) instead of brew or aptitude to install nodejs.


# Proyect Set Up

## One time setup

### ENV setup
------------
create the `.env` file on the root.
```
API_BASE_URL=https://XXXXXXXX

OTHER_ENV_VARs=XXXXXXXXXX

```

Where the `API_BASE_URL` is the debug url api.

Then create the `.env.production` file on the root too, with the same data that the last,
but the `API_BASE_URL` must be the production url api.

-----------

### Android

---------------

Set the following variables in `~/.gradle/gradle.properties`
```
MY_PROYECT_RELEASE_STORE_FILE=my_proyect-key.keystore
MY_PROYECT_RELEASE_KEY_ALIAS=my_proyect-key
MY_PROYECT_RELEASE_STORE_PASSWORD=xxxxxxxx
MY_PROYECT_RELEASE_KEY_PASSWORD=xxxxxxxx
```

Update the file `android/app/build.gradle` according to this [guide](https://facebook.github.io/react-native/docs/signed-apk-android.html#adding-signing-config-to-your-app-s-gradle-config) using the variables set in `~/.gradle/gradle.properties`

Generate the file `my_proyect-key.keystore` using the following command from your terminal and place it in the `android/app` folder

```
$ keytool -genkey -v -keystore my_proyect-key.keystore -alias my_proyect-key -keyalg RSA -keysize 2048 -validity 10000

Enter keystore password: xxxxx
Re-enter new password: xxxxx
What is your first and last name?
  [Unknown]:  wolox
What is the name of your organizational unit?
  [Unknown]:  wolox
What is the name of your organization?
  [Unknown]:  wolox
What is the name of your City or Locality?
  [Unknown]:  wolox
What is the name of your State or Province?
  [Unknown]:  wolox
What is the two-letter country code for this unit?
  [Unknown]:  wx
Is CN=wolox, OU=wolox, O=wolox, L=wolox, ST=wolox, C=wx correct?
  [no]:  yes

Generating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 10,000 days
	for: CN=wolox, OU=wolox, O=wolox, L=wolox, ST=wolox, C=wx
Enter key password for <my_proyect-key>
	(RETURN if same as keystore password):  xxxxx
Re-enter new password: xxxxx
[Storing my_proyect-key.keystore]
```

--------------

### iOS

--------------

We use [FastLane](https://fastlane.tools/) and few of its plugins to automate many ios tasks:
- Interact with Apple Developer Portal and iTunes Connect.
- Automate code signing (Certificates and provisioning profiles handling. Take a look at [match](https://github.com/fastlane/fastlane/tree/master/match))
- Creating IPAs ([gym](https://github.com/fastlane/fastlane/tree/master/gym))
- Uploading builds to testflight ([gym](https://github.com/fastlane/fastlane/tree/master/pilot))

#### FastLane setup

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```
Follow this guides to properly install rbenv and ruby-build. These are tools that will easily allow you to install and change different ruby versions.
1- [Rbenv](https://github.com/rbenv/rbenv#installation)
2- [Ruby build](https://github.com/rbenv/ruby-build#installing-as-an-rbenv-plugin-recommended)

Then run the following command to install the desired ruby version
```bash
rbenv install 2.4.1
rbenv global 2.4.1
rbenv local 2.4.1
```
Run `ruby -v` to check that it was successfully installed.

The last step is installing Fastlane gems:
```bash
gem install bundler
bundle install
```

#### Create app on both Apple Developer Portal and iTunes Connect
To interact with Apple Developer Portal and iTunes Connect we use [Produce](https://github.com/fastlane/fastlane/tree/master/produce).
Run the following command from the project rootpath:
```bash
fastlane produce
```

#### Create provisioning profiles and signing certificates

To manage certificates and profiles we use [Match](https://github.com/fastlane/fastlane/tree/master/match).
Run the following command from the project rootpath:
```bash
fastlane match --git_url <project repository url> --git_branch certificates
```
You still need to manually set this certificates using xCode.

#### Create push notification certificates
To create push notification certificates we use [Pem](https://github.com/fastlane/fastlane/tree/master/pem).
Run the following commands from the project rootpath:
```bash
fastlane pem --development
fastlane pem
```
These two commands do the following:
- Create a new signing request
- Create a new push certification
- Downloads the certificate
- Generates a new .pem file in the current working directory, which you can upload to your server

--------------------


# Running aplication

--------------------
To run a Android/Ios simulator with `development` environment, just run:

IOS
`react-native run-ios`

ANDROID
`react-native run-android`

--------------------


--------------------
To run a Android/Ios simulator with `Production` environment, just run:

IOS
`react-native run-ios --configuration Release`

ANDROID
`react-native run-android` and then:
1. Command⌘ + M to launch the developer menu in Android emulator.
2. Tap DevSettings.
3. Toggle JS Dev Mode.

--------------------


# Outputs

## Android
Use the the command in the rootpath to generate the APK:
```
yarn run android:build
```
It will generate the apk file in the path `android/app/build/outputs/apk/app-release.apk`

If you want to test that file in a plugged devise use the command `yarn run android:install` to install it.


## iOS

Fastlane is required here. Check the iOS

### Creating an IPA for development (QA)
Use the following command from the project rootpath:
```bash
fastlane dev
```
`dev` task is defined in our Fastfile.

### Uploading build to testflight
Use the following command from the project rootpath:
```bash
fastlane beta
```
`beta` task is defined in our Fastfile.
This command only uploads a new build. You still need to go to itunes connect to make this build available for testers and complete the build description.
