# 关于数据库root 账号登录不上
## 1、登录数据库

```javascript
  sudo mysql -u root -p
```
## 2、创建root用户

```javascript
  create user 'root'@'%' identified by '12345678';
```
## 3、注册root用户到全部表

```javascript
  grant all on *.* to 'root'@'%';
```