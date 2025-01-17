/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2d20e7aa88d581cd',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '537f25d137a3a56ec7e6fcb37eb55ab4',

  PROVINCE: '广东',
  CITY: '韶关',
  CITY: '广州',

  USERS: [
    {  PROVINCE: '广东',
      CITY: '广州',
      // 想要发送的人的名字
      name: '小号',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDRxy6VHe82z6PlDn-JCwBXRq76Q',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'HnihcFIiWS0ey2twgxwTtV7JJGMv3r1vyw5m7uRdt4c',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小号', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-30' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-10-30' },
      ],
    },

     {
      // 想要发送的人的名字
      name: 'da号',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDRxy6RQ_KsE1pppOcr-9mxD2_M0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'zEz8HpeN9c8pviNdI9lo6fHHYknWupB4vzOmM_5HJgU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'da号', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
        // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],

    },

     {
        PROVINCE: '广东',
        CITY: '广州',
      // 想要发送的人的名字
      name: '糖糖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDRxy6X1AAz6p2R34FEfWIiXB47U',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'HnihcFIiWS0ey2twgxwTtV7JJGMv3r1vyw5m7uRdt4c',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '06-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '自己', year: '2002', date: '06-15',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '10-30',
        },
      ],
        // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-30' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],

    },

      {
      // 想要发送的人的名字
      name: '肾虚哥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDRxy6c1R2KSWycod0vV9E4EU0a0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'zEz8HpeN9c8pviNdI9lo6fHHYknWupB4vzOmM_5HJgU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'da号', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],

    },
  ],

   


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'F3z6q3jDlK-IEOZDa34QqdGMPweZnD2BnQ-IZ2DP9TA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDRxy6RQ_KsE1pppOcr-9mxD2_M0',
    }
  ],

}

module.exports = USER_CONFIG

