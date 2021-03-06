# 数据库

## 概念

#### 事务transaction

一个最小的不可再分的工作单元；通常一个事务对应一个完整的业务。

数据库事务是一个逻辑上的划分，有的时候并不是很明显，它可以是一个操作步骤也可以是多个操作步骤。我们可以这样理解数据库事务: 对数据库所做的一系列修改，在修改过程中，暂时不写入数据库，而是缓存起来，用户在自己的终端可以预览变化，直到全部修改完成，并经过检查确认无误后，一次性提交并写入数据库，在提交之前，必要的话所做的修改都可以取消。提交之后，就不能撤销，提交成功后其他用户才可以通过查询浏览数据的变化。

以事务的方式对数据库进行访问，有如下的优点：

1、把逻辑相关的操作分成了一个组；

2、在数据永久改变前，可以预览数据变化；

3、能够保证数据的读一致性。

#### 游标cursor

游标（cursor）是系统为用户开设的一个数据缓冲区（一个内存区域的虚表），存放SQL语句的执行结果。在存储了游标之后，应用程序可以根据需要滚动或浏览其中的数据。

还可以把游标当作一个指针，它可以对查询结果进行遍历，指定结果中的任何位置，然后允许用户对指定位置的数据进行处理。

#### 锁lock

用于保证事务的隔离性和并发操作时的数据一致性的一种机制。

当多个事务同时更新数据库中相同的数据时，只允许持有锁的事务能更新该数据，其他事务必须等待，直到前一个事务释放了锁，其他事务才有机会更新该数据。

### 其它

- 提交commit、回滚rollback
  - 调用 commit 或 rollback语句来结束当前事务

## ACID

1、原子性(Atomicity)：事务中的全部操作在数据库中是不可分割的，要么全部完成，要么全部不执行。

2、一致性(Consistency)：几个并行执行的事务，其执行结果必须与按某一顺序串行执行的结果相一致。

3、隔离性(Isolation)：事务的执行不受其他事务的干扰，事务执行的中间结果对其他事务必须是透明的。

4、持久性(Durability)：对于任意已提交事务，系统必须保证该事务对数据库的改变不被丢失，即使数据库出现故障。

## 范式

## 关系数据库

关系型数据库和非关系型数据库最大的理念区别在于，对数据一致性的要求。

- 关系型数据库：非常严格，一个事务操作中只要有一条数据不合规则，前面的也会被放弃掉，整个事务回滚至原来状态，牺牲性能而追求一致性和稳定性
- 非关系型数据库：数据结构不固定，灵活，扩展性强