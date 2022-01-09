# 特殊

## axios

response interceptors: [How to use Axios with TypeScript when using response interceptors (AxiosResponse issue) · Issue #1510 · axios/axios · GitHub](https://github.com/axios/axios/issues/1510#issuecomment-525382535)

```js
import axios from 'axios'

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
```

```js
import axios from 'axios'

declare module 'axios' {
  export interface AxiosInstance {
    request<T = any> (config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
}
```

[axios使用及配置明细小记](https://blog.csdn.net/u014225733/article/details/98722635)

```
interface AxiosInstance {
  <T = any>(value: T): Promise<T>
}
```

```typescript
Service<T, P extends any[]> = (...args: P) => Promise<T>
```