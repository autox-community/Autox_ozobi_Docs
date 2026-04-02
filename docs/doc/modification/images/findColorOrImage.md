# 找图找色 

## images.findImage(img, template[, options])

-   `img` {Image} 大图片
-   `template` {Image} 小图片（模板）
-   `options` {Object} 选项包括：
    -   `useAlphaMask` {boolean} 是否启用透明通道掩码 
    -   `threshold` {number} 图片相似度。取值范围为 0~1 的浮点数。默认值为 0.9。
    -   `region` {Array} 找图区域。参见 findColor 函数关于 region 的说明。
    -   `level` {number} **一般而言不必修改此参数**。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level 参数表示金字塔的层次, level 越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。

找图。在大图片 img 中查找小图片 template 的位置（模块匹配），找到时返回位置坐标(Point)，找不到时返回 null。


## images.matchTemplate(img, template, options) 

-   `img` {Image} 大图片
-   `template` {Image} 小图片（模板）
-   `options` {Object} 找图选项：
    -   `useAlphaMask` {boolean} 是否启用透明通道掩码
    -   `threshold` {number} 图片相似度。取值范围为 0~1 的浮点数。默认值为 0.9。
    -   `region` {Array} 找图区域。参见 findColor 函数关于 region 的说明。
    -   `max` {number} 找图结果最大数量，默认为 5
    -   `level` {number} **一般而言不必修改此参数**。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level 参数表示金字塔的层次, level 越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
-   返回 {MatchingResult}

在大图片中搜索小图片，并返回搜索结果 MatchingResult。该函数可以用于找图时找出多个位置，可以通过 max 参数控制最大的结果数量。也可以对匹配结果进行排序、求最值等操作。
 