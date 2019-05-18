document.addEventListener( "plusready",  function()
{
    var _BARCODE = 'Applovin';
    var   B = window.plus.bridge;
    var Applovin = {
            Call : function (Fname, successCallback, errorCallback )
            {
                var success = typeof successCallback !== 'function' ? null : function(args)
                    {
                        successCallback(args);
                    },
                    fail = typeof errorCallback !== 'function' ? null : function(code)
                    {
                        errorCallback(code);
                    };
                callbackID = B.callbackId(success, fail);
                return B.exec(_BARCODE, Fname, [callbackID]);
            },
            SyncCall: function (Fname,Args) {
                return B.execSync(_BARCODE, Fname, [Args]);
            }
        };
    window.plus.Applovin = Applovin;
}, true );


// 普通广告
Type_CommonAds = 1;
// 视频广告
Type_RewardAds = 2;

