# Class-Metadata

### Table of Contents

- [Installation](#Installation)
- [Quickstart](#Quickstart)
- [Advanced usage](#Advanced-usage)

### Installation

```bash
# 使用 npm
npm install @auroravpn/class-metadata

# 使用 yarn
yarn add @auroravpn/class-metadata

# 使用 pnpm
pnpm add @auroravpn/class-metadata
```

### Quickstart

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

### Advanced usage
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
