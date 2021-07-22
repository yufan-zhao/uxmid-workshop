function install(Vue, options)
{
    Vue.prototype.$dialog =
    {
        info: function(config)
        {
            console.log("dialog info");
        }
    };
}

export default install;
