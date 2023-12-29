const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 입력 파일 및 출력 파일 경로 설정
const inputFolderPath = './input';
const outputFolderPath = './output';

// 허용된 이미지 확장자 배열
const allowedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

// 출력 폴더가 없으면 생성
if (!fs.existsSync(outputFolderPath)) {
  fs.mkdirSync(outputFolderPath);
}

fs.readdir(inputFolderPath, (err, files) => {
  if (err) {
    console.error(`입력 폴더 읽기 오류: ${err.message}`);
    return;
  }

  // 지원되는 이미지 파일 필터링
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return allowedExtensions.includes(ext);
  });

  // 각 이미지 파일을 읽어 WebP로 변환
  imageFiles.forEach(imageFileName => {
    const imageFilePath = path.join(inputFolderPath, imageFileName);
    const webpFileName = path.basename(imageFileName, path.extname(imageFileName)) + '.webp';
    const webpFilePath = path.join(outputFolderPath, webpFileName);

    sharp(imageFilePath)
      .toFile(webpFilePath, (conversionErr, info) => {
        if (conversionErr) {
          console.error(`이미지 변환 오류 (${imageFileName}): ${conversionErr.message}`);
        } else {
          console.log(`이미지 변환 성공 (${imageFileName}). 출력 파일: ${webpFilePath}`);
          console.log(`변환된 이미지 정보:`, info);
        }
      });
  });
})
