iwake_formal = [`お世話になります。
移動中に急に体調が悪くなってしまいまして、途中下車して休んでおりました。
そのため、到着が大幅に遅れてしまう見込みになっています。
連絡が遅くなってしまったことお詫びいたします。
到着時間がわかり次第、再度連絡させていただきます。
お待たせしてしまい申し訳ございません。`, 
`お世話になります。
途中駅にて急病人が出た影響で、電車が止まってしまっておりました。
そのため、到着が大幅に遅れてしまう見込みになっています。
連絡が遅くなってしまったことお詫びいたします。
到着時間がわかり次第、再度連絡させていただきます。
お待たせしてしまい申し訳ございません。`,
`お世話になります。
家を出てから急激にお腹の調子が悪くなってしまいまして、やむなく一度自宅に引き返しておりました。
連絡が遅くなってしまいまして申し訳ありません。
到着が大幅に遅れてしまう見込みになってしまいました。
到着時間がわかり次第、再度連絡させていただきます。
お待たせしてしまい申し訳ございません。`,
`お世話になります。
先ほど忘れ物をしてしまい、電車に乗ってから気づき引き返しておりました。慌てていたため、連絡をすることを忘れてしまっておりました。大変申し訳ありません。
到着が遅れてしまう見込みになってしまいましたため、到着時間がわかり次第、再度連絡させていただきます。
お待たせしてしまい申し訳ございません。`,
`先ほどまで家族が重大な体調不良に見舞われてしまっており、そちらの対応に追われておりました。現在は容態も安定しておりますため、急ぎ向かっているところとなります。慌ててしまっていたために連絡することを忘れてしまっておりました。申し訳ありません。
到着が遅れてしまう見込みになってしまいましたため、到着時間がわかり次第、再度連絡させていただきます。
どうかよろしくお願いいたします。`,
`お世話になります。
携帯電話と財布を電車の中に起き忘れてしまい、駅から出ることもできずに回収に奔走しておりました。駅員の皆様の協力もあり、現在はどちらも手元に戻ってきております。
到着が遅れてしまう見込みになってしまいましたため、到着時間がわかり次第、再度連絡させていただきます。
お待たせしてしまい申し訳ございません。`,
`お世話になります。
本日お伺いする道すがら、血を流して倒れている人を発見いたしました。助け起こしたところ、財布と携帯電話を盗まれ、走って逃げられました。
警察の皆様の協力もあり、現在はどちらも手元に戻ってきております。
到着が遅れてしまう見込みになってしまいましたため、到着時間がわかり次第、再度連絡させていただきます。
お待たせしてしまい申し訳ございません。`,
`お世話になります。
ガスの元栓を閉め忘れたまま家を出てしまい、すでに電車に乗ってからそれに気がつきました。急ぎ戻ってガスの元栓を閉めたため火事にはなりませんでしたが、危ないところでした。
携帯電話も家に置き忘れたまま家を出てしまったため、連絡するのが遅くなりました。大変申し訳ありません。
ただ申し訳ないことに、それが原因で本日は遅れての到着になってしまいます。申し訳ありません。`,
`お世話になります。
家の鍵を閉め忘れたまま家を出てしまい、すでに電車に乗ってからそれに気がつきました。急ぎ戻って家の鍵を閉めたため空き巣には入られませんでしたが、危ないところでした。
もちろん携帯電話も家に置き忘れたまま家を出てしまったため、連絡するのが遅くなりました。大変申し訳ありません。
ただ申し訳ないことに、それが原因で本日は遅れての到着になってしまいます。申し訳ありません。`,
`お世話になります。
全部忘れたまま家を出てしまい、すでに電車に乗ってからそれに気がつきました。急ぎ戻って全部を回収の上向かっております。
携帯電話もその例外ではなく、家に忘れたまま家を出てしまったため、連絡するのが遅くなりました。大変申し訳ありません。全部忘れていました。
ただ申し訳ないことに、それが原因で本日は遅れての到着になってしまいます。申し訳ありません。`
]
iwake_private = [`会議長引いちゃった、到着遅れるごめんなさい`, 
`ちょっと体調悪くて休んでた（今はもう大丈夫）
到着遅れるごめん`,
`お腹痛い・・・
ごめんちょっと遅れるわ
また連絡する`,
`あ
ごめん忘れ物した・・・
急いで取りにいってくる　ごめん`,
`家族が体調悪いっていうから対応してた
申し訳ないけど少し遅れる　時間潰してて`,
`電車内に財布置き忘れた・・・
終わった・・・
駅員さんに聞いてみる・・・
遅れます・・・`,
`困ってた人助けたら財布盗まれたわ
警察いってくるから遅れる`,
`あ
ガスの元栓閉めてないわ
うち火事やばいから一旦戻る　遅れるごめん`,
`あ
家の鍵閉めてないわ
うち空き巣やばいから一旦戻る　遅れるごめん`,
`あ
全部持ってきてないわ
うち全部やばいから一旦戻る　遅れるごめん`
]

$(function(){
    $('.tool_chip').hide();
    $('.formal').on('click', function () {
        input_text = iwake_formal[Math.floor(Math.random() * iwake_formal.length)]
        $('.textarea').val(input_text);
        let $textarea = $('.textarea');
        $textarea.select();
        document.execCommand('copy');
        $('.tool_chip').show();
        $('.tool_chip').fadeOut(1000);
    });
    
    $('.private').on('click', function () {
        input_text = iwake_private[Math.floor(Math.random() * iwake_private.length)]
        $('.textarea').val(input_text);
        let $textarea = $('.textarea');
        $textarea.select();
        document.execCommand('copy');
        $('.tool_chip').show();
        $('.tool_chip').fadeOut(1000);
    }); 
});
