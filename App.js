import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// add your access key and dr id
const access_key = '';
const datarequest_id = '';

const source = {
  html: `
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title> Proof Of Income </title>
      <script src="https://api-stg.measureone.com/v3/js/m1-link-2021042000.js"></script>
  </head>
  <body>
    <div>
      <m1-link></m1-link>

    <script>
      var config = {
          access_key: "${access_key}",
          host_name: "api-stg.measureone.com",
          datarequest_id: "${datarequest_id}",
          branding: {
              styles: {
                  primary_dark: "#186793",
                  primary_light: "#2e9ccb",
                  secondary_color: "#ffffff",
                  min_height: "700px"
              }
          },
          options: {
              "display_profile": false
          }
      }

      // Take reference to widget
      const m1_widget = document.querySelector("m1-link");

      // Add configuration
      m1_widget.setAttribute("config", JSON.stringify(config));
      // Add event listeners
      m1_widget.addEventListener('datasourceConnected',(event)=>{
          window.ReactNativeWebView.postMessage(JSON.stringify(event));
          window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
      });
      m1_widget.addEventListener('currentProgress',(event)=>{
        window.ReactNativeWebView.postMessage(JSON.stringify(event));
        window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
      });
      m1_widget.addEventListener('exitRequested',(event)=>{
          window.ReactNativeWebView.postMessage(JSON.stringify(event));
          window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
      });
      m1_widget.addEventListener('individualUpdated',(event)=>{
          window.ReactNativeWebView.postMessage(JSON.stringify(event));
          window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
      });
      m1_widget.addEventListener('consentStatusChanged',(event)=>{
          window.ReactNativeWebView.postMessage(JSON.stringify(event));
          window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
      });
      m1_widget.addEventListener('datasourceConnected',(event)=>{
          window.ReactNativeWebView.postMessage(JSON.stringify(event));
          window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
      });
      m1_widget.addEventListener('itemsCreated',(event)=>{
          window.ReactNativeWebView.postMessage(JSON.stringify(event));
          window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
      });
      m1_widget.addEventListener('tokenExpired',(event)=>{
          window.ReactNativeWebView.postMessage(JSON.stringify(event));
          window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
      });
      m1_widget.addEventListener('credentialsNotObtained',(event)=>{
          window.ReactNativeWebView.postMessage(JSON.stringify(event));
          window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
      });
      m1_widget.addEventListener('datasourceNotSupported',(event)=>{
          window.ReactNativeWebView.postMessage(JSON.stringify(event));
          window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
      });
    </script>
  </body>
</html>
`
};

export default function App() {
  return (
      <WebView
        source={source}
        style={{ marginTop: 20 }}
        nestedScrollEnabled={true}
        scrollEnabled={true}
        onMessage={(m) => {
            console.info('Measure One Event:', m.nativeEvent.data);
        }}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
