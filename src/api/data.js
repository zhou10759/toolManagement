import axios from "axios";
import request from '@/utils/request'
import qs from 'qs'

export function getTouTiaoData(data) {
    return request({
        url: '/external/getNew',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
        method: 'POST',
        data: qs.stringify( data )
    })
}

// export function getTouTiaoData(params) {
//     return axios({
//         url: '/api/news/feed/v88/?version_code=7.9.1&tma_jssdk_version=1.81.0.15&app_name=news_article&vid=11DCDF45-23F8-4E36-A537-765BFB63BC44&device_id=71065272585&channel=update_tf&resolution=1242*2688&aid=13&ab_feature=794528,1662483,1538699,1910351&ab_version=668779,660830,662176,1859937,1403339,662099,1417596,668774,668775,2001178,1646978,1593455,2063720,1965376,1419597,2020941,2033166,1500054,1877263,2104901,2089995&ab_group=794528,1662483,1538699,1910351&openudid=f99a765341f5a651ac1b5db964dfb60d0c35c65f&pos=5pe9vb/88Pzt3vTp5L+9p72/eCQieCoDv7GXvb2//vTp5L+9p72/eCQieCoDv7GXvb2/8fLz+vTp6Pn4v72nvaysrrOorqytqaWsqqqtpa6urrGXvb2/8fzp9Ono+fi/vae9r6+zpa2spa+tr62upKSurairsZe9vb/88Pzt0fzp9Ono+fi/vae9r6+zpa2spa+tr62upKSurairsZe9vb/88Pzt0fLz+vTp6Pn4v72nvaysrrOorqytqaWsqqqtpa6urrGXvb2/8fL+/PHC8fzp+O7pwu3y7r+9p73ml729vb2/6fTw+O7p/PDtv72nvayrra6rpaStr6Szrayvr6qtpLGXvb29vb/t7/Lr9PP++L+9p72/eCQieSUBv7GXvb29vb/+9Onkv72nvb94JCJ4KgO/sZe9vb29v/7y8u/59PP86fjL/PHo+O6/vae95pe9vb29vb2/8fLz+vTp6Pn4v72nvaysrrOorqytqaWsqqqtpa6urrGXvb29vb29v/H86fTp6Pn4v72nva+vs6WtrKWvra+trqSkrq2oq5e9vb294LGXvb29vb/8+fnv+O7uv72nvb94JCJ5JQF6ARx4JCJ4KgN4JR94EAp7LwR4ESe/l7294Jfg&cdid=902F061F-B5BF-415C-A20B-A056801ECC4F&update_version_code=79108&idfv=11DCDF45-23F8-4E36-A537-765BFB63BC44&ac=WIFI&os_version=14.0.1&ssmix=a&device_platform=iphone&iid=2269005508786301&ab_client=a1,f2,f7,e1&device_type=iPhone12,5&idfa=35EC3CB2-C801-414A-8995-1AA8E74DA230&language=zh-Hans-HK&image=1&list_count=20&count=20&tt_from=pull&latitude=22.80182020399306&city=%E5%B9%BF%E5%B7%9E&last_refresh_sub_entrance_interval=1603689044&loc_time=1603689029&user_city=%E5%B9%BF%E5%B7%9E&last_response_extra=%7B%22data%22%3A%22e30%22%7D&refer=1&ad_ui_style=%7B%22van_package%22%3A130000046%2C%22is_crowd_generalization_style%22%3A1%7D&refresh_reason=1&concern_id=6286225228934679042&longitude=113.5310481770833&st_time=3258&session_refresh_idx=1&strict=0&LBS_status=authroize&rerank=0&detail=1&client_extra_params=%7B%22lynx_version_json%22%3A%22%7B%5C%22ugc_common_lynx%5C%22%3A76400%2C%5C%22tt_lynx_hotboard%5C%22%3A76903%2C%5C%22ugc_personal_page%5C%22%3A77400%2C%5C%22ugc_lynx_wenda%5C%22%3A74601%2C%5C%22lynx_city_channel%5C%22%3A76500%2C%5C%22learning_lynx_card%5C%22%3A78200%2C%5C%22ugc_lynx_hotboard%5C%22%3A75504%2C%5C%22tt_search_lynx_cell%5C%22%3A78800%2C%5C%22ugc_lynx_survey%5C%22%3A76400%2C%5C%22attach_post_card%5C%22%3A76800%2C%5C%22new_local_forum_cell%5C%22%3A76200%2C%5C%22new_local_stick_cell%5C%22%3A76300%2C%5C%22learning_lynx_profile%5C%22%3A77700%2C%5C%22toutiao_lynx_card%5C%22%3A77300%2C%5C%22ugc_lynx_native_hotboard_card%5C%22%3A74201%7D%22%2C%22last_ad_position%22%3A-1%2C%22playparam%22%3A%22codec_type%3A1%2Cenable_dash%3A0%2Cunwatermark%3A0%22%2C%22sort_offset%22%3A%220%22%7D&min_behot_time=1603688390&loc_mode=1&cp=53Ff98635cA55q1',
//         method: 'get'
//     })
// }


export function getTouTiaoRecommend(data) {
    return request({
        url: '/external/guessSearch',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
        method: 'POST',
        data: qs.stringify( data )
    })
}

export function getUrlInfo(data) {
    return request({
        url: '/external/getUrlInfo',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
        method: 'POST',
        data: qs.stringify( data )
    })
}