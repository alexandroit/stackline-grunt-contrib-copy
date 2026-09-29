const cp=require('node:child_process');
cp.execFileSync(process.execPath,[require.resolve('grunt-cli/bin/grunt'),'test'],{stdio:'inherit',env:process.env});
