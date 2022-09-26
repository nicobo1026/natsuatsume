// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"--基本系-----------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"Community_Basic","status":true,"description":"基本的なパラメーターを設定するプラグインです。","parameters":{"cacheLimit":"20","screenWidth":"432","screenHeight":"768","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"AudioStreaming","status":true,"description":"音声読み込みを高速化し、oggファイルのみを使用します。","parameters":{"mode":"10","deleteM4a":"false"}},
{"name":"DataCacheBlocker","status":true,"description":"キャッシュを阻止します。（dataフォルダのみ）","parameters":{}},
{"name":"NOM_ChangeFontSize","status":true,"description":"文字サイズ調整プラグイン","parameters":{}},
{"name":"DynamicDatabase","status":true,"description":"動的データベース構築プラグイン","parameters":{}},
{"name":"EaseEventLoad","status":true,"description":"[Ver1.1.0]イベント処理軽量化","parameters":{"opt1valid":"true","opt2valid":"true","opt3valid":"true","opt4valid":"true","opt5valid":"true"}},
{"name":"AutoLoad","status":false,"description":"タイトル画面仕様変更プラグイン","parameters":{"効果音演奏":"false","タイトルスキップポリシー":"1","タイトルマップID":"0"}},
{"name":"TitleNewGameOnly","status":true,"description":"ニューゲームオンリープラグイン","parameters":{"startString":"はじめる","font":"{\"name\":\"\",\"size\":\"35\",\"bold\":\"false\",\"italic\":\"false\",\"color\":\"rgba(255,255,255,1.0)\"}","startImage":"","fileExistAction":"2","soundEffect":"{\"name\":\"nc123625\",\"volume\":\"50\",\"pitch\":\"100\",\"pan\":\"0\"}","adjustX":"0","adjustY":"0"}},
{"name":"--デバッグ用-----------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"AdjustPictureGraphical","status":true,"description":"ピクチャのグラフィカルな位置調整プラグイン。\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）","parameters":{"グリッドサイズ":"48","テストマップID":"-1"}},
{"name":"GraphicalDesignMode","status":false,"description":"GUI画面デザインプラグイン\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）","parameters":{"デザインモード":"true","自動保存":"false","モバイル版作成":"false","モバイル偽装":"false","ウィンドウ透過":"false","グリッドサイズ":"48","パディング":"0","フォントサイズ":"0","行の高さ":"0","背景透明度":"0","アイコンサイズ調整":"false","背景表示可否固定":"false","右クリックで消去":"false","メッセージウィンドウを無視":"false"}},
{"name":"--タッチ系-------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"SAN_TouchAnimation","status":true,"description":"タッチアニメーション 1.0.0\nタッチ時にアニメーションを表示します。","parameters":{"AnimationID":"121","Scale":"60","Opacity":"150","Valid":"ON"}},
{"name":"DestImageCustomize","status":true,"description":"目的地画像カスタマイズプラグイン","parameters":{"不透明度":"0","合成方法":"1","表示色":"","独自画像":""}},
{"name":"MPP_SimpleTouch3","status":true,"description":"【ver.3.19】マウスやタッチ操作を変更します。","parameters":{"Cancel Enabled?":"true","Double Tap Interval":"30","Cursor SE Always?":"false","Scroll Warp?":"false","Scroll Warp SE":"{\"Name\":\"\",\"Volume\":\"90\",\"Pitch\":\"100\",\"Pan\":\"0\"}","Smooth Scroll?":"true","=== Default ===":"","Long Press Time":"12","Select Type Default":"1","Ok Type Default":"0","Outside Tap Default":"0","=== Option ===":"","Long Press Name":"","Select Type Name":"","Select Type Status":"[\"タッチ\",\"追従\"]","Ok Type Name":"決定操作","Ok Type Status _v3":"[\"デフォルト\",\"シングル\",\"ダブル\"]","Outside Tap Name":"","Outside Tap Status _v3":"[\"無効\",\"キャンセル\"]","=== Command ===":"","Plugin Commands":"{\"CancelOff\":\"CancelOff\"}"}},
{"name":"--移動系----------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"HalfMove","status":false,"description":"半歩移動プラグイン","parameters":{"8方向移動":"false","8方向移動スイッチ":"0","イベントすり抜け":"false","強制中無効":"false","角回避":"false","斜め移動中減速":"false","トリガー拡大":"false","実歩数調整":"false","上半分移動不可地形":"[\"0\"]","上半分移動不可Region":"[\"0\"]","下半分移動不可地形":"[\"0\"]","下半分移動不可Region":"[\"0\"]","右半分移動不可地形":"[\"0\"]","右半分移動不可Region":"[\"0\"]","左半分移動不可地形":"[\"0\"]","左半分移動不可Region":"[\"0\"]","右上移動不可地形":"[\"0\"]","右上移動不可Region":"[\"0\"]","右下移動不可地形":"[\"0\"]","右下移動不可Region":"[\"0\"]","左上移動不可地形":"[\"0\"]","左上移動不可Region":"[\"0\"]","左下移動不可地形":"[\"0\"]","左下移動不可Region":"[\"0\"]","全方向移動不可地形":"[\"0\"]","全方向移動不可Region":"[\"0\"]","イベント複数起動防止":"false","イベント位置重複OK":"false"}},
{"name":"HorizontalScrollingMove","status":false,"description":"横スクロール移動プラグイン","parameters":{"有効スイッチ番号":"0","プレイヤー上向き許容":"false","イベント上向き許容":"false","画像のみ向き制限":"true"}},
{"name":"--文章系-----------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"MPP_MessageEX","status":true,"description":"文章表示の機能を拡張したり表示の演出を追加します。","parameters":{"-----Basic":"","Text Set":"[]","Wait Effects":"{\"Scroll Map\":\"true\",\"Set Movement Route\":\"true\",\"Show Animation\":\"true\",\"Show Balloon Icon\":\"true\",\"Move Picture\":\"true\",\"Tint Picture\":\"true\",\"Tint Screen\":\"true\",\"Flash Screen\":\"true\",\"Shake Screen\":\"false\",\"Set Weather Effect\":\"false\",\"Fadeout BGM\":\"false\",\"Fadeout BGS\":\"false\",\"Play ME\":\"false\"}","Skip Effects":"{\"Scroll Map\":\"true\",\"Set Movement Route\":\"true\",\"Move Picture\":\"true\",\"Tint Picture\":\"true\",\"Tint Screen\":\"false\",\"Flash Screen\":\"false\",\"Shake Screen\":\"false\",\"Set Weather Effect\":\"false\"}","Skip Effects Timing":"skip","Ruby Oy":"0","Always Leave Ruby Height":"false","-----Default":"","Default Anime Type":"0","Default Message Row":"3","Default FadeOut Type":"0","Default FadeOut Speed":"5","Default Text Speed":"60","Default Ruby Color":"255,255,255","Default Ruby Size":"14","Default Ruby Outline":"2"}},
{"name":"YEP_MessageCore","status":true,"description":"メッセージの表示方法や機能をカスタマイズすることができます。","parameters":{"---一般---":"","Default Rows":"3","Default Width":"Graphics.boxWidth - 40","Face Indent":"Window_Base._faceWidth + 24","Fast Forward":"Input.isPressed('pagedown')","Word Wrapping":"false","Description Wrap":"false","---フォント---":"","Font Name":"GameFont","Font Size":"22","Font Size Change":"3","Font Changed Max":"96","Font Changed Min":"12","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]"}},
{"name":"TMTextEscape","status":true,"description":"文章の表示に使える制御文字を追加します。","parameters":{}},
{"name":"NOM_ChangeWindowOpacity","status":true,"description":"文章ウィンドウ透明度プラグイン","parameters":{}},
{"name":"NOM_MessageWindowPosition","status":true,"description":"メッセージウィンドウ位置調整プラグイン","parameters":{}},
{"name":"TextDecoration","status":false,"description":"ウィンドウテキストの装飾方法を変更します。","parameters":{"Mode":"1","Red":"0","Green":"0","Blue":"0","Alpha":"120"}},
{"name":"--ピクチャ系-----------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{"itemIconSwitchId":"0","lineSpacingVariableId":"0","frameWindowSkin":"","frameWindowPadding":"18","padCharacter":"0","prefixText":""}},
{"name":"DWindow","status":true,"description":"動的ウィンドウ生成プラグイン","parameters":{"X座標の変数番号":"1","Y座標の変数番号":"2","横幅の変数番号":"3","高さの変数番号":"4","最前面に表示":"false","ピクチャに含める":"0"}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"true","ピクチャ番号の変数番号":"21","ポインタX座標の変数番号":"0","ポインタY座標の変数番号":"0","タッチ操作抑制":"false","タッチ操作抑制スイッチ":"0","戦闘中常にコモン実行":"false","並列処理として実行":"false","無効スイッチ":"0"}},
{"name":"EasingPicture","status":true,"description":"ピクチャーの移動パターンを増やします。","parameters":{}},
{"name":"--選択系----------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"MPP_ChoiceEX","status":true,"description":"選択肢の機能を拡張します。","parameters":{"Max Page Row":"10","Disabled Position":"none"}},
{"name":"TMEventItemEx","status":true,"description":"アイテム選択の処理にヘルプウィンドウを追加し、\n個数表示の有無と表示行数をアイテムタイプごとに設定できます。","parameters":{"helpWindowEnabledItem":"0","helpWindowEnabledKey":"1","helpWindowEnabledA":"0","helpWindowEnabledB":"0","showItemNumberItem":"0","showItemNumberKey":"1","showItemNumberA":"0","showItemNumberB":"0","numVisibleRowsItem":"5","numVisibleRowsKey":"5","numVisibleRowsA":"5","numVisibleRowsB":"5","fixPlacement":"top"}},
{"name":"ChangeSelectItemWindow","status":true,"description":"『アイテム選択の処理』のウィンドウの行数と列数を変更します。","parameters":{"Switch ID":"21","Max Columns":"1","Visible Rows":"7"}},
{"name":"MessageTriggerSe","status":true,"description":"メッセージ送りSEプラグイン","parameters":{"validateSwitchId":"22","soundEffect":"{\"name\":\"nc123625\",\"volume\":\"30\",\"pitch\":\"100\",\"pan\":\"0\"}","doseContinueOnly":"false"}},
{"name":"MKR_PlayerMoveForbid","status":true,"description":"(v1.0.5) プレイヤー移動禁止プラグイン","parameters":{"Default_Move_Flag":"26","Default_Menu_Flag":"true","Enter Flag":"true"}},
{"name":"EventInformation","status":true,"description":"v1.1.1 イベントの頭上に文字を表示したい時に使います","parameters":{}},
{"name":"EventReSpawn","status":true,"description":"イベント動的生成プラグイン","parameters":{"keepSelfSwitch":"false","tryRandomCount":"1000","CertainSpawnSwitch":"0"}},
{"name":"TemplateEvent","status":true,"description":"テンプレートイベントプラグイン","parameters":{"TemplateMapId":"3","KeepEventId":"false","OverrideTarget":"{\"Image\":\"true\",\"Direction\":\"false\",\"Move\":\"false\",\"Priority\":\"false\",\"Trigger\":\"false\",\"Option\":\"false\"}","AutoOverride":"false","IntegrateNote":"0"}},
{"name":"FTKR_PopupSpriteMessage","status":true,"description":"v1.2.5 任意のメッセージを画面上にポップアップ表示するプラグイン","parameters":{"Max Popup Messages":"100","Popup Message Status":"[\"{\\\"fontFace\\\":\\\"\\\",\\\"fontSize\\\":\\\"16\\\",\\\"color\\\":\\\"[\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\"]\\\",\\\"italic\\\":\\\"false\\\",\\\"outlineColor\\\":\\\"15\\\",\\\"popupHeight\\\":\\\"20\\\",\\\"offsetWait\\\":\\\"0\\\",\\\"opacity\\\":\\\"255\\\"}\",\"{\\\"fontFace\\\":\\\"\\\",\\\"fontSize\\\":\\\"24\\\",\\\"color\\\":\\\"[\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\"]\\\",\\\"italic\\\":\\\"false\\\",\\\"outlineColor\\\":\\\"15\\\",\\\"popupHeight\\\":\\\"20\\\",\\\"offsetWait\\\":\\\"0\\\",\\\"opacity\\\":\\\"255\\\"}\"]","Repop Message After Menu":"false"}},
{"name":"KMS_MapActiveMessage","status":false,"description":"[v0.3.2] プレイヤーが近付いたときに、自動的にメッセージを表示するイベントを作成します。","parameters":{"Balloon offset Y":"20","Balloon margin":"-8","Default range":"1","Display duration":"300","Max message count":"10","Message skin":"ActiveMessageSkin"}},
{"name":"CommonPopupCore","status":true,"description":"ver1.04/汎用的なポップアップの仕組みを提供するためのベースプラグインです。","parameters":{"Text Back Color":"rgba(0,0,0,0.6)","Text Back FileName":"popup_back%d"}},
{"name":"TriggerExtension","status":true,"description":"タッチでイベントを実行するなど、イベントページのトリガーを拡張します","parameters":{}},
{"name":"MPP_SelfVariable","status":true,"description":"各イベントにセルフ変数を追加します。","parameters":{"Variables":"27"}},
{"name":"Yami_SkipTitle","status":false,"description":"テストプレイ用にタイトルシーンを飛ばすことができます。","parameters":{}},
{"name":"MenuCallCommon","status":false,"description":"Xボタンorマウスの右クリックでメニュー画面を開くかわりにコモンイベントを動作させるプラグイン","parameters":{"ComEvent":"1","ComCloseEvent":"0","ComSwitch":"0"}},
{"name":"111_InputForm","status":true,"description":"フォーム作って文字入力（修正版）","parameters":{}},
{"name":"FTKR_EventReSpawnEx","status":false,"description":"v1.0.0 EventReSpawn.jsとTemplateEvent.jsで生成した一時イベントの座標とセルフスイッチを記録する","parameters":{"Save Condition When Transfer":"1"}},
{"name":"FloatVariables","status":true,"description":"変数の小数演算プラグイン","parameters":{"小数変数開始位置":"62","小数変数終了位置":"63"}},
{"name":"CustomizeErrorScreen","status":true,"description":"エラー画面表示改善プラグイン","parameters":{"MainMessage":"以下のエラーが発生しました。製作者にご報告願います。","HyperLink":"","OutputDetail":"true"}},
{"name":"NRP_EventCollisionEX","status":true,"description":"v1.03 イベントの当たり判定を拡張する。","parameters":{"ConsiderEventMove":"true","SettingList":"[]"}},
{"name":"Torigoya_SaveCommand","status":true,"description":"プラグインコマンドからセーブを実行できるようにします。","parameters":{}},
{"name":"ServerTime","status":true,"description":"サーバータイムを取得します。","parameters":{}}
];
