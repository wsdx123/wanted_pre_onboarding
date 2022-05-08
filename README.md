Toggle
>2개의 input태그를 type=radio 로 설정하고, label 태그에 연결하여 사용했습니다. 그리고 배경색이 들어간 span태그가 checked된 라벨에 이동하도록 구현하였습니다.
초기에 어떤방법으로 구현해야할지, 어떤 태그를 써야할지부터가 고민이었던 항목이었습니다. 그래서 처음 구현했을땐 체크되면 해당 구역의 색깔을 바꿔주는 style을 주어 슬라이드되는 애니메이션 구현을 포기했었으나, tab의 애니메이션을 구현하면서 이것역시 같은방법으로 하면되겠다 생각하여 애니메이션을 추가해 구현할수 있었습니다.

Tab
>Tab자체를 만들고(리스트), 클릭하면 다른탭이 선택되는 css를 만드는건 어렵지 않았으나 슬라이드 애니메이션이 고민거리였습니다. 그런데 탭과 슬라이딩효과를 꼭 하나로 묶을필요는 없겠다 생각하게 되어 효과를 위한 div태그를 따로 만들게 되었습니다. 
이것을 구현할때 가장 고민했던 것은 애니메이션 효과를 위한 (1)언더라인의 위치잡기 + (2)그 위치를 css에 어떻게 넘겨줄지 였습니다. (1)은 ref나 queryselector를 사용해서 구현하려했는데 결국 queryselector로 구현했습니다. 그리고 (2)는 제가 기존에 쓰던 module.css로 하는것보다 styled-component의 props를 쓰는것이 더 쉽고 편하겠다고 판단하여 styled-components를 사용했습니다.

Slider
>가장 난이도가 높을것이라 생각해 마지막에 했는데, 그리 어렵지않았습니다. 뭔가 잘못했나 생각될정도로 별것 아니었던거같습니다.. 예시에 존재하는 25/50/75지점들은 구현하지 못했지만 input태그의 range타입으로 슬라이더를 구현하고, state값을 받아와 div에 띄워주는 식으로 구현했습니다.

Input
> input,password 태그를 각각 이메일,패스워드 타입으로 설정, email에 유효성검사를 집어넣어 유효성을 만족하면 이미지 src를 바꿉니다. 

Dropdown
>드롭다운을 내리면 검색창을 넣기위해, 기존에 있는 select를 사용하지않고 state가 바뀌면 display를 none->block으로 바꾸는 식으로 활용했습니다.
그리고 검색필터는 array.filter로 구현했습니다


2022.05.06
> - eslint,prettier,stylelint 환경설정. 
> - 새로운 환경에서 Toggle 구현 완료. 적절치 않은 태그 사용이나 불필요한 태그 사용을 빼내고 간단하고 적절한 태그로 마크업.
> - Tab의 기능,css 구현 완료. styled-components를 뻄. queryselector로 복잡하고 좋지않게 구현했던 underbar의 위치를 position:relative 로 손쉽게 구현함.
> - Input의 기능,css 구현 완료. email유효성 검사의 표준 정규식 사용, 아이콘의 svg파일 사용, css 다듬기, interactive하지않은 태그  교체.
<br/>

2022.05.07
> - Dropdown 바깥쪽 클릭시 접기 제외 기능,css 구현완료. styled-components 빼기, classnames 라이브러리 사용을 통해 일부코드의 간소화, filter를 useEffect에 옮겨 search값이 변할때마다 실행하도록 수정, key값에 index 대신 array에 id값을 가공해 넣음.
> - Dropdown 외부 클릭시 접는 기능은 좀 더 이해가 필요한것 같다. ref의 이해부족이거나, 열고닫는 state에 이상이 있는것으로보인다.
<br/>

2022.05.08
> - Slider 기능,css 구현완료. styled-components 빼기, 그리고 이전에는 기본 webkit slider 때문에 커스텀 하지않았었지만 린터와 스타일린터 설정 때문인지 완전히 백지상태여서 아예 새로 디자인을 했다.
> - webkit-slider-thumb,runnable-track 을 찾아보고 최대한 비슷하게 커스텀했다. track의 볼록한건 완성하지못했다.
> - css 의 var() 라는걸 알게 되어 css내에 변수로 사용할 수 있다는걸 알게되었고, 이를 마크업 시 inline style 로 slider의 value값과 연결시켜 linear-gradient에 색상 %값에 넣어줌으로써 슬라이더가 지나간 부분의 색상채우기를 구현하였다.
