import React from "react";
import PubSub from 'pubsub-js';
import Image from "next/image";


export default function VideoCard({videoData}){
    // function throttle(fn, delay) {
    //     let timer;
    //     return function (...args) {
    //         if (!timer) {
    //             timer = setTimeout(() => {
    //                 fn.apply(this, args);
    //                 timer = null;
    //             }, delay);
    //         }
    //     };
    // }

// 创建节流版的处理函数
//     const throttledHandleCardMouseEnter = throttle((e) => {
//         PubSub.publish('videoModalVisible', { message: true });
//     }, 1000); // 1000毫秒的延迟
//
//     const throttledHandleCardMouseLeave = throttle((e) => {
//         //PubSub.publish('videoModalVisible', { message: false });
//     }, 1000); // 1000毫秒的延迟

    function  openDetailModal(){
        PubSub.publish('detailModalVisible', { message: true });
    }

    return (
        <Image
            src={videoData.cover}
            alt="video cover"
            width={256}
            height={144}
            priority={false}
            title={videoData.id}
             // onMouseEnter={throttledHandleCardMouseEnter}
             //    onMouseLeave={throttledHandleCardMouseLeave}
            onClick={openDetailModal}
             className={`w-64  
             2xl:h-36  xl:h-36 lg:h-32 sm:h-30  md:h-28 h-28
             inline-block mr-2 object-cover rounded cursor-pointer hover:brightness-[0.6] transition ease-in-out duration-150`}>
        </Image>
    )
}