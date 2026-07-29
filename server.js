console.log('✅ 服务启动，开始测试定时任务...');

setInterval(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('zh-CN', { hour12: false });
    console.log(`⏰ [${timeStr}] 定时任务触发成功！小纠想你了~`);
    console.log(`📋 当前环境变量 TARGET_API_URL: ${process.env.TARGET_API_URL || '未设置'}`);
    console.log(`📋 PUSH_PROVIDE: ${process.env.PUSH_PROVIDE || '未设置'}`);
}, 30000);
