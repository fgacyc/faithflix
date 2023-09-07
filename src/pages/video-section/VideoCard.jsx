import React from "react";
import PubSub from 'pubsub-js';


export default function VideoCard({videoData}){
    function throttle(fn, delay) {
        let timer;
        return function (...args) {
            if (!timer) {
                timer = setTimeout(() => {
                    fn.apply(this, args);
                    timer = null;
                }, delay);
            }
        };
    }

// 创建节流版的处理函数
    const throttledHandleCardMouseEnter = throttle((e) => {
        PubSub.publish('videoModalVisible', { message: true });
    }, 1000); // 1000毫秒的延迟

    const throttledHandleCardMouseLeave = throttle((e) => {
        //PubSub.publish('videoModalVisible', { message: false });
    }, 1000); // 1000毫秒的延迟

    function  openDetailModal(){
        PubSub.publish('detailModalVisible', { message: true });
    }

    return (
        <img src={videoData.cover} alt="video cover" title={videoData.id}
             // onMouseEnter={throttledHandleCardMouseEnter}
             //    onMouseLeave={throttledHandleCardMouseLeave}
            onClick={openDetailModal}
             className={"w-64  h-36 inline-block mr-2 object-cover rounded cursor-pointer hover:brightness-[0.6] duration-200"}>
        </img>
    )
}