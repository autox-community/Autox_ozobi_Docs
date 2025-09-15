# 本地存储

## storages.getExisting([returnPath])

-   `returnPath` boolean 是否返回完整路径
-   `return` string[]

获取当前存在的本地存储名称[完整路径]列表(通过 storages.create() 创建的)

## Storage.getAllKeys()

-   `return` string[]

获取本地存储的所有键值

## Storage.getAll()

-   `return` Map<String, ?>

获取本地存储的所有键值对

## Storage.getPref()

-   `return` SharedPreferences

获取本地存储的 SharedPreferences 对象
