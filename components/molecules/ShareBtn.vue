<template lang="pug">
  .share-btn
    i.fab.fa-twitter(
      @click="windowOpen()"
    )
    el-button(@click="test") test
    a#download(
      download="sample.png"
    ) donwload
</template>

<script>
export default {
  data() {
    return {
      url: process.env.BASE_URL + this.$route.path,
      twitter: process.env.TWITTER_ACCOUNT,
      hashtag: process.env.SITE_NAME,
      twitterLink:
        'https://twitter.com/intent/tweet?url={0}&text={1}&hashtags={2}&related={3}&via={4}&lang=ja',
      pageTitle: 'あつ森カブ値動きチャート',
      imgUrl: ''
    }
  },
  methods: {
    twitterShareLink() {
      return this.formatByArr(
        this.twitterLink,
        this.imgUrl,
        this.pageTitle + ' ' + this.imgUrl,
        this.hashtag,
        this.twitter,
        this.twitter
      )
    },
    formatByArr(msg) {
      let args = []
      for (let i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i]
      }
      args = args.map((x) => encodeURIComponent(x))
      return msg.replace(/\{(\d+)\}/g, (m, k) => {
        return args[k]
      })
    },
    windowOpen() {
      const link = this.twitterShareLink()
      console.log(this.imgUrl)
      return window.open(
        link,
        '_blank',
        'top=100,left=100,width=600,height=500'
      )
    },
    test() {
      const imageType = 'image/png'

      const canvas = document.getElementById('line-chart')
      // base64エンコードされたデータを取得 「data:image/png;base64,iVBORw0k～」
      const base64 = canvas.toDataURL(imageType)
      // base64データをblobに変換
      const blob = this.Base64toBlob(base64)
      // blobデータをa要素を使ってダウンロード
      const a = document.getElementById('download')
      this.imgUrl = window.URL.createObjectURL(blob)
      a.href = this.imgUrl
    },

    Base64toBlob(base64) {
      // カンマで分割して以下のようにデータを分ける
      // tmp[0] : データ形式（data:image/png;base64）
      // tmp[1] : base64データ（iVBORw0k～）
      const tmp = base64.split(',')
      // base64データの文字列をデコード
      const data = atob(tmp[1])
      // tmp[0]の文字列（data:image/png;base64）からコンテンツタイプ（image/png）部分を取得
      const mime = tmp[0].split(':')[1].split(';')[0]
      //  1文字ごとにUTF-16コードを表す 0から65535 の整数を取得
      const buf = new Uint8Array(data.length)
      for (let i = 0; i < data.length; i++) {
        buf[i] = data.charCodeAt(i)
      }
      // blobデータを作成
      const blob = new Blob([buf], { type: mime })
      return blob
    }
  }
}
</script>
