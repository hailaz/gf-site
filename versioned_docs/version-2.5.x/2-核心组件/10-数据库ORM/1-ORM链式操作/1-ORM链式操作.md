---
title: 'ORM链式操作(🔥重点🔥)'
sidebar_position: 1
---

## 基本介绍

`gdb` 链式操作使用方式简单灵活，是 `GoFrame` 框架官方推荐的数据库操作方式。链式操作可以通过数据库对象的 `db.Model` 方法或者事务对象的 `tx.Model` 方法，基于指定的数据表返回一个链式操作对象 `*Model`，该对象可以执行以下方法。当前方法列表可能滞后于源代码，详细的方法列表请参考接口文档： [https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Model](https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Model)

## 相关文档

- [ORM链式操作-模型创建](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-模型创建)
- [ORM链式操作-写入保存](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-写入保存)
- [ORM链式操作-更新删除](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-更新删除)
- [ORM链式操作-数据查询](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询)
  - [ORM查询-Where/WhereOr/WhereNot](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询/ORM查询-WhereWhereOrWhereNot)
  - [ORM查询-All/One/Array/Value/Count](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询/ORM查询-AllOneArrayValueCount)
  - [ORM查询-AllAndCount](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询/ORM查询-AllAndCount)
  - [ORM查询-Scan](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询/ORM查询-Scan)
  - [ORM查询-ScanAndCount](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询/ORM查询-ScanAndCount)
  - [ORM查询-LeftJoin/RightJoin/InnerJoin](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询/ORM查询-LeftJoinRightJoinInnerJoin)
  - [ORM查询-Group/Order/Having](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询/ORM查询-GroupOrderHaving)
  - [ORM查询-Union/UnionAll](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询/ORM查询-UnionUnionAll)
  - [ORM查询-子查询特性](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询/ORM查询-子查询特性)
  - [ORM查询-常用操作示例](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据查询/ORM查询-常用操作示例)
- [ORM链式操作-模型关联](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-模型关联)
  - [模型关联-动态关联-ScanList](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-模型关联/模型关联-动态关联-ScanList)
  - [模型关联-静态关联-With特性](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-模型关联/模型关联-静态关联-With特性)
- [ORM链式操作-对象输入](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-对象输入)
- [ORM链式操作-字段过滤](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-字段过滤)
- [ORM链式操作-字段获取](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-字段获取)
- [ORM链式操作-事务处理](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-事务处理)
- [ORM链式操作-主从切换](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-主从切换)
- [ORM链式操作-查询缓存](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-查询缓存)
- [ORM链式操作-时间维护](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-时间维护)
- [ORM链式操作-数据库切换](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-数据库切换)
- [ORM链式操作-Hook特性](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-Hook特性)
- [ORM链式操作-Handler特性](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-Handler特性)
- [ORM链式操作-悲观锁 & 乐观锁](output/goframe-v2.5-md/核心组件/数据库ORM/ORM链式操作/ORM链式操作-悲观锁%20&%20乐观锁)