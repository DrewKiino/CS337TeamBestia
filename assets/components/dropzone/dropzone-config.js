
// dropzone configuration,
Dropzone.autoDiscover = false

// reference to polymer class in dropzone-element.html
var polymer = document.querySelector('dropzone-element')
// create dropzone variable referencing the 'myDropzone' div
var dropzone = new Dropzone("div#myDropzone", {
  url: '/file/upload',
  paramName: 'file', // key that 'req.file({paramName})' will search for
  maxFilesize: 10000, // MB
  maxFiles: 10, // the max number of files allowed in dropzone
  parallelUploads: 2, // the max number of files to be uploaded in one request
  // OR, the max number of requests done if uploadMultiple is set to false
  uploadMultiple: true, // upload multiple files in one request if set to true
  autoProcessQueue: false, // upload files automatically if set to true
  addRemoveLinks: false,
  acceptedFiles:"image/*",

  /**
   * here you can access all the events fired by dropzone.
   * if dropzone is uploading the files for some reason even though
   * some configurations where set, it might be a syntax error which
   * causes dropzone to ignore this code.
   */
  init: function() {

    console.log('myDropzone initialized!')

    // here, we reroute all of dropzone's event listeners to 
    // fire polymer's functions instead. This way, polymer truly 
    // the becomes the only controller for this element as well as
    // preventing spaghetti logic.
    this.on('addedfile', polymer.addedfile)
    this.on('sending', polymer.sending)
    this.on('success', polymer.success)
    this.on('uploadProgress', polymer.uploadProgress)
    this.on('complete', polymer.complete)
  }
})