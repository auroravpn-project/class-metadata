# Class-Metadata

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-5.0%2B-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

适用于后端架构的元数据框架

## 🚀 快速开始

### 安装

```bash
# 使用 npm
npm install @auroravpn/class-metadata

# 使用 yarn
yarn add @auroravpn/class-metadata

# 使用 pnpm
pnpm add @auroravpn/class-metadata
```

### 示例

```javascript
import { Metadata } from '@auroravpn/class-metadata'

// 创建元数据对象
const metadata = new Metadata()

// 定义元数据
metadata.define('key', new Metadata())

// 获取元数据
metadata.get('key')

// 遍历元数据
metadata.each<Metadata>((val, key) => {
    console.log(key, value)
})
```

### 进阶用法
```javascript
import { Metadata } from '@auroravpn/class-metadata'

// 通过继承来拓展元数据属性
class ControllerMetadata extends Metadata {
    key1: string = ''
    key2: string = ''
}

class RouteMetadata extends Metadata {
    key3: string = ''
}

const metadata = new ControllerMetadata()

metadata.define(new RouteMetadata())
```

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证。

## 🔗 链接

- [GitHub 仓库](https://github.com/CyHollis/class-metadata)
