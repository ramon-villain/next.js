import dynamic from 'next/dynamic';
export const NextDynamicNoSSRServerComponent = dynamic(typeof window != "undefined" && (async ()=>{
    ()=>import('../text-dynamic-no-ssr-server');
}), {
    loadableGenerated: {
        modules: [
            "some-file.js -> " + "../text-dynamic-no-ssr-server"
        ]
    },
    ssr: false
});
