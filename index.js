const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 입력 파일 (jpg) 및 출력 파일 (webp) 경로 설정
const inputFolderPath = './input';
const outputFolderPath = './output';

fs.readdir(inputFolderPath, (err, files) => {
  if (err) {
    console.error(`입력 폴더 읽기 오류: ${err.message}`);
    return;
  }

  // JPG 파일 필터링
  const jpgFiles = files.filter(file => file.toLowerCase().endsWith('.jpg'));

  // 각 JPG 파일을 읽어 WebP로 변환
  jpgFiles.forEach(jpgFileName => {
    const jpgFilePath = path.join(inputFolderPath, jpgFileName);
    const webpFileName = jpgFileName.replace('.jpg', '.webp');
    const webpFilePath = path.join(outputFolderPath, webpFileName);

    sharp(jpgFilePath)
      .toFile(webpFilePath, (conversionErr, info) => {
        if (conversionErr) {
          console.error(`이미지 변환 오류 (${jpgFileName}): ${conversionErr.message}`);
        } else {
          console.log(`이미지 변환 성공 (${jpgFileName}). 출력 파일: ${webpFilePath}`);
          console.log(`변환된 이미지 정보:`, info);
        }
      });
  });
})
