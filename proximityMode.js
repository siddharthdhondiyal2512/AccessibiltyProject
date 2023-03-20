import { gapi } from 'gapi-script';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "proximity-mode-started"&& request.contentScript === "proximityMode") {
      // window.addEventListener('load', function() {       //waits for all the resources to first load on the browser
      //   console.log("hello4");
        gapi.load('client:auth2.0', initClient);
        // });
        function initClient(){
          console.log("hello1");
          gapi.client.init({
            apiKey: 'AIzaSyCbEAgVJkT6HdR2AmOYardhrvAPgKOuWXE',
            clientId: '1075362538915-6306uqcfj0fstqv9g38escj2sfhe6121.apps.googleusercontent.com',
            discoveryDocs: ['https://docs.googleapis.com/$discovery/rest?version=v1'],
            scope: 'https://www.googleapis.com/auth/documents'
          }).then(function() {
                // Google API client is initialized and ready to use
                console.log("hello2");
                gapi.auth2.getAuthInstance().signIn().then(function() {
                  gapi.client.drive.files.get({
                    fileId: '1Dv7POxm4VHfATEczefegvNPixkE11tBMkeTk2c9n09s'
                  }).then(function(response) {
                    console.log('Document Name:',response.result.name);
                  });            
                })
          })
        }
    };
  });





  









  // gapi.load('client:auth2.0', init);
  //     function init(){
  //       console.log("hello1");
  //       gapi.client.init({
  //         apiKey: 'AIzaSyCbEAgVJkT6HdR2AmOYardhrvAPgKOuWXE',
  //         clientId: '1075362538915-6306uqcfj0fstqv9g38escj2sfhe6121.apps.googleusercontent.com',
  //         discoveryDocs: ['https://docs.googleapis.com/$discovery/rest?version=v1'],
  //         scope: 'https://www.googleapis.com/auth/documents'
  //       }).then(function() {
  //             // Google API client is initialized and ready to use
  //             console.log("hello2");
  //             gapi.client.docs.documents.get({
  //               documentId: 'DOCUMENT_ID',
  //               includeCollaborators: true
  //             }).then(function(response) {
  //               // handle response containing document content and collaborators
  //               var collaborators = response.result.collaborators;
            
  //               // Loop through the collaborators array and extract the name property
  //               var names = [];
  //               collaborators.forEach(function(collaborator) {
  //                 names.push(collaborator.name);
  //               });
            
  //               // Do something with the names array, such as display it in the Google Docs document
  //               console.log('Collaborators:', names);
  //             })
  //       })
  //     }