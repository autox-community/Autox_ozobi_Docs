# 找图找色

## images.findImage(img, template[, options])

- `img` {Image} 大图片
- `template` {Image} 小图片（模板）
- `options` {Object} 选项包括：
    - `useAlphaMask` {boolean} 是否启用透明通道掩码
    - 其他参数与前的相同
- 返回 {Point}

找图。在大图片 img 中查找小图片 template 的位置（模块匹配），找到时返回位置坐标(Point)，找不到时返回 null。

## images.matchTemplate(img, template, options)

- `img` {Image} 大图片
- `template` {Image} 小图片（模板）
- `options` {Object} 找图选项：
    - `useAlphaMask` {boolean} 是否启用透明通道掩码
    - 其他参数与前的相同
- 返回 {MatchingResult}

在大图片中搜索小图片，并返回搜索结果 MatchingResult。该函数可以用于找图时找出多个位置，可以通过 max 参数控制最大的结果数量。也可以对匹配结果进行排序、求最值等操作。
