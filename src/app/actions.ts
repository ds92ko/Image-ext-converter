'use server';

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { revalidatePath } from 'next/cache';

const allowedExtensions = ['.webp', '.png', '.jpg', '.jpeg', '.svg', '.gif'];

export async function createInvoice(formData: FormData) {
  const files = formData.getAll('files') as File[];
  const extension = formData.get('extension') as string;

  const outputFolderPath = path.join(process.cwd(), '/src/output');

  if (!fs.existsSync(outputFolderPath)) fs.mkdirSync(outputFolderPath);

  const imageFiles = files.filter(file => {
    const ext = path.extname(file.name).toLowerCase();
    return allowedExtensions.includes(ext);
  });

  try {
    for (const imageFile of imageFiles) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const fileName = path.basename(imageFile.name, path.extname(imageFile.name));
      const filePath = path.join(outputFolderPath, `${fileName}_${uuidv4()}.${extension}`);

      sharp(buffer).toFile(filePath, (err, data) => {
        if (err) {
          console.error(`이미지 변환 오류 (${fileName}): ${err.message}`);
        } else {
          console.log(`이미지 변환 성공 (${fileName}). 출력 파일: ${filePath}`);
          console.log(`변환된 이미지 정보:`, data);
        }
      });
    }
  } catch (error) {
    console.error('Image conversion error:', error);
  }

  revalidatePath('/');
}
