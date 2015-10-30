/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/**
 * MARK: key is not really key but the actual path of the file
 * 
 * EXAMPLE 1: 'stock-photo-2.jpg' was uploaded in a folder called
 * 'image_components', therefore, the key string would be
 * 'image_components/stock-photo-2.jpg'.
 * 
 * EXAMPLE 2: 'stock-photo-2.jpg' was uploaded in the root folder, therefore
 * the key string would be 'stock-photo-2.jpg'
 *
 */
export function upload(req, res) {

  sails.log.info('attempting to upload file to mongodb')

  /**
   * get the item count and loop through all the files using
   * skipper's body parser. the actual streams do not get activated
   * until you access the '.stream' of the file, this allows us to parse
   * each file and upload it using a promisified Skipper-S3 upload handler.
   *
   * thanks to javascripts retarded type safety, were allowed to created an
   * empty array and push these promisified functions into. We then call
   * a Promise.all on the promise array and once all the uploads 
   * successfully complete, we res back the OK results.
   */
  // var promises = []
  // var itemCount = req.body.itemCount[0]
  // for (var i = 0; i < itemCount; i++) {
  //   promises.push(uploadToS3(req, 'file[' + i + ']', s3Bucket()))
  // }
  // // sails.log.debug(promises)
  // return Promise.all(promises)
  // .then( results => {
  //   sails.log.info('all files uploaded!')
  //   return res.send({status: 200})
  // })
  // .catch( error => {
  //   sails.log.error(error)
  //   return res.serverError(error)
  // })
  res.ok('goodjob.')
}