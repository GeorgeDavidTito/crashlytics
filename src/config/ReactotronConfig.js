import Immutable from 'seamless-immutable';
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';

// If you want to use a physical device and connect it to reactotron, execute first `adb reverse tcp:9090 tcp:9090`
if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({ name: 'crashlytics', host: scriptHostname })
    .use(trackGlobalErrors())
    .use(apisaucePlugin())
    .use(reactotronRedux({ onRestore: state => Immutable(state) }))
    .connect();
}
