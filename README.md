# HotelManager

Phần mềm quản lý khách sạn đơn giản được viết bằng Nodejs và MongoDB

## Thành viên

- [@tantran1012](https://github.com/tantran1012)
- [@Lindonut](https://github.com/Lindonut)
- [@xuanthanhcr222](https://github.com/xuanthanhcr222)


## Hướng dẫn cài đặt và chạy chương trình

1/ Mở terminal đến thư mục gốc của chương trình

2/ Cài đặt node modules

```bash
  npm install
```

3/ Tại thư mục gốc, tạo file .env với nội dung như bên dưới và chỉnh sửa cho phù hợp

```bash
  PORT=3000
  MONGO_URI= url_database_mongodb
  SESSION_SECRET= secretcat
  DEFAULT_PASSWORD = "default_password_for_new_user"
```

4/ Chạy server

```bash
  npm start
```

5/ Xem kết quả tại [http://localhost:3000](http://localhost:3000)
