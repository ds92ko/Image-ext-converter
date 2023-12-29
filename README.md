# 🖼️ 이미지 확장자 변환 프로그램

## 📋 Table of Contents

- [👀 Introduction](#👀-introduction)
  - [🌟 Features](#🌟-features)
- [🙌 About the Projects](#🙌-about-the-projects)
  - [🛠️ Stacks](#🛠️-stacks)
- [🪄 Getting Started](#🪄-getting-started)
  - [📌 Prerequisites](#📌-prerequisites)
  - [🚀 Setup](#🚀-setup)
  - [📦 Installation](#📦-installation)
  - [🏃 Run the Program](#🏃-run-the-program)
  - [⚙️ Configuration](#⚙️-configuration)

<br/>

## 👀 Introduction

> 이 프로그램은 지정된 폴더 내의 이미지 파일을 읽어와 WebP 형식으로 변환하는 간단한 Node.js 스크립트입니다.<br/>Sharp 라이브러리를 사용하여 이미지 변환 작업을 수행합니다.

### 🌟 Features

.jpg, .png, .jpeg, .gif 이미지 파일을 WebP로 변환

<br/>

## 🙌 About the Projects

### 🛠️ Stacks

| **Configuration** | **Stacks**                                                                                                                                                                                                                                                                                                                           |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Environment       | <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> |
| Config            | <img src="https://img.shields.io/badge/npm v9.6.7-CB3837?style=for-the-badge&logo=npm&logoColor=white">                                                                                                                                                                                                                              |
| Development       | <img src="https://img.shields.io/badge/node v18.17.1-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/sharp-99CC00?style=for-the-badge&logo=sharp&logoColor=white">                                                                                                                |

<br/>

## 🪄 Getting Started

### 📌 Prerequisites

> Node.js가 설치되어 있어야 합니다

### 🚀 Setup

```bash
$ git clone https://github.com/ds92ko/image-ext-converter.git
$ cd image-ext-converter
```

### 📦 Installation

```bash
$ npm install
```

### 🏃 Run the Program

```bash
$ node index.js
```

### ⚙️ Configuration

- 프로젝트 실행 전 루트 디렉토리에 `input` 폴더를 생성합니다
- 변환하고자 하는 이미지 파일을 `input` 폴더에 추가합니다
- 변환된 WebP 파일은 `output` 폴더에 생성됩니다
