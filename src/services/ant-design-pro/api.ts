// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Changes of pmq20/ant-design-rails */
export async function submitBasicForm(params: any) {
  return request('/api/basic-form', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': window.document.querySelector("meta[name='csrf-token']").getAttribute('content'),
      'Content-Type': 'application/json',
    },
    data: params,
  });
}

/** Changes of pmq20/ant-design-rails */
export async function getRailsPage(full_path: string, options?: { [key: string]: any }) {
  return request(full_path, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    ...(options || {}),
  });
}

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': window.document.querySelector("meta[name='csrf-token']").getAttribute('content'),
    },
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': window.document.querySelector("meta[name='csrf-token']").getAttribute('content'),
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    headers: {
      'X-CSRF-Token': window.document.querySelector("meta[name='csrf-token']").getAttribute('content'),
    },
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': window.document.querySelector("meta[name='csrf-token']").getAttribute('content'),
    },
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': window.document.querySelector("meta[name='csrf-token']").getAttribute('content'),
    },
    ...(options || {}),
  });
}
