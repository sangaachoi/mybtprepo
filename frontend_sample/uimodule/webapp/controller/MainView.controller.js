sap.ui.define(
  ["./BaseController",
    "sap/ui/model/json/JSONModel", //define에서 JSONModel 로드
    "sap/ui/core/Fragment"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, Fragment) {
                        //위의 define에서 로드한 모듈은 파라미터에서 선언해서 써야 함
    "use strict";

    return Controller.extend("gitpg.myapp.controller.MainView", {
      onInit: function () {

        // let oJson = new JSONModel(
        // // 생성자를 통해 로드한 제이슨을 제이슨 객체로 만듦
        // // 객체 변수 이름은 oJson
        // // JSONModel 생성자를 만들 때 인자를 줘야 하고, 생성자 함수에 줄 인자는 실제 JSON 포맷이어야 한다.
        //   {
        //     myArr1 : [
        //       { listName : '1. Create' },
        //       { listName : '2.CSS' },
        //       { listName : '3.File List' },
        //       { listName : '4. HTML' },
        //       { listName : '5. Java Script' }
        //     ],
        //     myArr2 : [
        //       { listName : 'choisanga2' },
        //       { listName : 'leehyunjoo2' },
        //       { listName : 'SeoJuYeoon222'}
        //     ]
        //   }
        // );

        // this.getView().setModel(oJson, 'myFileList')
        // 위에서 만들어진 json을 이 앱의 myData란 이름으로 등록하는 과정
        // getView()된 결과를 통해 View를 가지고 오고,
        // 그 뷰의 setModel을 통해 oJson을 myData란 이름을 가진 모델로 등록한 것


        // let oJson = new JSONModel();
        // this.getView().setModel(oJson, 'myNode');
        // oJson.loadData(
        //     'http://localhost:8921/files'
        //     // 'https://port-8921-nodejs-wailing-fall-qowwll54536.codeanyapp.com/files'
        // ).then(
        //     function () {
        //         debugger;
        //     }.bind(this)
        // )
        
      
        $.ajax(
          'http://localhost:8921/files', //첫 번째 파라미터 (이 주소로 요청 보냄)
          //     'https://port-8921-nodejs-quaint-lizard-lgx0920328747.codeanyapp.com/files'
          {
              // method, success, error이 세 개는 기계적으로 쓴다고 생각 
            method: "GET", //HTTP  요청 메서드 (GET, POST 쓸 수 있음)
            success : function (...params) { //위의 소스 읽기 성공하면 여기 탐
              let Success = JSON.parse(params[0]);


              //myData
              let oJson = new JSONModel(Success);
              this.getView().setModel(oJson,'myData')

              debugger;
            }.bind(this),
            error : function (...params) { //호출 끝나고나서 에러났으면 이 함수를 콜백
              debugger;
            }
          }
        )


      },

      onPress:function(oEvent){
        let sIdRaiseEvent = oEvent.getSource().getId();

        let sIdLink0 = this.getView().byId('link0').getId();
        let sIdLink1 = this.getView().byId('link1').getId();
        let sIdLink2 = this.getView().byId('link2').getId();
        let sIdLink3 = this.getView().byId('link3').getId();
        let sIdLink4 = this.getView().byId('link4').getId();
        let sIdLink5 = this.getView().byId('link5').getId();

        debugger;

        let pFragment ;

        if (sIdRaiseEvent === sIdLink0) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.link0",
              type : "XML",
              id : "link0Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink1) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.link1",
              type : "XML",
              id : "link1Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink2) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.link2",
              type : "XML",
              id : "link2Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink3) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.link3",
              type : "XML",
              id : "link3Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink4) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.link4",
              type : "XML",
              id : "link4Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink5) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.link5",
              type : "XML",
              id : "link5Fragment",
              controller : this
            }
          )
        }

        pFragment.then(function (oView){
          let oMyExtend = this.getView().byId('myExtend');
          
          oMyExtend.destroyItems(); //myExtend 내부 Item 밑에 다 지워버려
          oMyExtend.addItem(oView); //Item 추가해

        }.bind(this));

      }

    });
  }
);