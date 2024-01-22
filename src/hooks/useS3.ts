import AWS from "aws-sdk";
const config = {
  bucketName: import.meta.env.VITE_BUCKET_NAME,
  region: import.meta.env.VITE_REGION,
  accessKeyId: import.meta.env.VITE_ACCESS,
  secretAccessKey: import.meta.env.VITE_SECRET,
};
AWS.config.update({
  region: config.region,
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
});
const s3 = new AWS.S3();

export const upLoadS3 = async (
  name: string,
  registerNum: string,
  file: File | null
) => {
  const uploadPromise = () => {
    const params = {
      Bucket: config.bucketName,
      Key: name + "_" + registerNum,
      Body: file,
    };
    return s3.upload(params).promise();
  };
  try {
    const result = await Promise.resolve(uploadPromise());
    return result.Location;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
