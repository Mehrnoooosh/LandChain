import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import loader from "../assets/img/loader.gif";


export const request = (url, method, data) => {
    var div = document.getElementById('loader_body');
    let ex = url.split('?');
    if (div) {
        div.innerHTML += `<div id="" class="loader ${ex[0]}"><div className="loader"><img src="${loader}" alt="" /></div></div>`;
    }
    return new Promise((resolve, reject) => {
        var requestOptions = {
            method: method ? method : 'GET',
            url: `${process.env.REACT_APP_BE_URL}${url}`,
            data: data ? data : new FormData()
        };
        axios(requestOptions).then(response => {
            resolve(response.data)
        })
            .catch(error => {
                console.log(error)
                reject()
            }).finally(() => {
                let el = document.getElementsByClassName(ex[0]);
                if (el.length) {
                    for (let index = 0; index < el.length; index++) {
                        el[index].remove();
                    }
                }
            })
    });
};

export function getFormData(data) {
    let form_data = new FormData();
    for (var key in data) {
        if (typeof data[key] === 'object') {
            for (const k in data[key]) {
                form_data.append(key + '[]', data[key][k]);
            }
        } else
            form_data.append(key, data[key]);
    }
    return form_data;
}

export const sendAlert = (success = false, msg) => {
    const option = {
        position: "bottom-right",
        style: { direction: "rtl", 'text-align': 'right', fontFamily: "IRANSansX", 'white-space': 'pre-line' },
        theme: 'colored'
    };
    if (success)
        toast.success(msg, option);
    else
        toast.error(msg, option);
}


export const confirm = () => {
    return new Promise((resolve, reject) => {
        Modal.confirm({
            title: 'Confirm operation',
            icon: <ExclamationCircleOutlined />,
            content: `Are you sure?`,
            okText: 'Yes',
            cancelText: 'No',
            closable: true,
            maskClosable: true,
            onOk: () => {
                resolve(true)
            },
        });
    });
};
export function getParams(params, name, createParams = 0, removePage = 0) {
    if (createParams == 1 && params.search('&')) {
        let new_params = '';
        let a = params.split('&');
        for (let i = 0; i < a.length; i++) {
            if (removePage == 1 && a[i].search('page') != -1)
                continue
            new_params += (a[i].replace('?', '') + '&');
        }
        return new_params.substring(0, new_params.length - 1);
    } else
        return new URLSearchParams(params).get(name);
}

export const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
export const e2p = s => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
