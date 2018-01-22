var fmtVersion = 2.3;

// debuginfo=0 optimize=true errors= xflags= strictness=
// start 0.011 s
// nr PathTreeNodes 2595
// multiple paths 539
// load js 0.073 s
// warning: unused classes: ::DraggableInContainer, ::DraggableInContainerHandle, ::DraggableHandle, ::DraggableEdge, ::HorizontalResizingDraggableEdge, ::VerticalResizingDraggableEdge, ::HorizontalSpacingHandle, ::VerticalSpacingHandle, ::DraggableEdgeLeft, ::DraggableEdgeRight, ::DraggableEdgeTop, ::DraggableEdgeBottom, ::DraggableCornerBottomRight, ::DraggableCornerBottomLeft, ::DragWrapper, ::UniformItemScrolledDocument, ::NonUniformItemScrolledDocument, ::IndexedItemScrolledDocument, ::Font, ::AnimateTopLeft, ::AnimateArea, ::MenuText, ::Badge, ::MarkArea, ::BasicListInArea, ::BasicListInAreaWithScrollbar, ::NonAreaSetWithScrollBar, ::BasicScrollBar, ::BasicVScrollBar, ::BasicHScrollBar, ::BasicScrollBarThumb, ::BasicVScrollBarThumb, ::BasicHScrollBarThumb, ::EditButton, ::CloseButton, ::DeleteButton, ::ActionButton, ::LeftOfLabel, ::RightOfLabel, ::ZAboveSiblings, ::AboveSibling, ::VerticalAlignWithSibling, ::BelowSiblings, ::AlignHorizontalCenterWithSibling, ::AlignVerticalCenterWithSibling, ::AlignParentBottomWithTallestChild, ::TextValueInput, ::ModalLayer, ::ChoiceButton, ::RemoteConnectionStateIndicator, ::TextLabel14Px, ::TextLabel20PxOnBackground, ::UnderlinedTextLabel14Px, ::UnderlinedTextLabel20Px, ::FocusRingContext, ::FocusRing, ::GuaranteeImmediateVisibility, ::OpenURLOnClick, ::StretchedList, ::WheelScroll, ::AutoSizeFixedMatrix, ::AreaWithPopUpAlignedToSideContext, ::AreaWithPopUpAlignedToSide
// remove qualifiers 0.054 s
// create template tree 0.007 s
// cycle 1 0.004 s
// warning: write without upon: onInitialPosition at app.initial.configuration.blocks.write.onInitialPosition
// warning: write without upon: onTemporaryPosition at app.initial.configuration.blocks.write.onTemporaryPosition
// warning: write without upon: onUndo at app.initial.configuration.blocks.write.onUndo
// warning: write without upon: onRedo at app.initial.configuration.blocks.write.onRedo
// warning: write without upon: onMouseUp at app.initial.configuration.blocks.write.onMouseUp
// warning: write without upon: onDraggableMouseDown at app.initial.configuration.blocks.write.onDraggableMouseDown
// warning: write without upon: onClickableMouseDown at app.initial.configuration.blocks.write.onClickableMouseDown
// warning: write without upon: onClickableMouseUp at app.initial.configuration.blocks.write.onClickableMouseUp
// warning: write without upon: onStorePositionInHistory at app.initial.configuration.blocks.write.onStorePositionInHistory
// warning: context.scrollViewBeingResized is undefined in template 23 at context.scrollViewBeingResized in class ::MoveableScrolledDocument for qualifiers {}
// warning: write without upon: viewStartOffsetChanged at app.history.scrollView.scrolledDocument.write.viewStartOffsetChanged
// warning: context.text is undefined in template 17 at display.text.value in class ::Block for qualifiers {}
// warning: write without upon: cursorStartOffsetChanged at app.history.scrollbar.write.cursorStartOffsetChanged
// warning: context.scrollbarCursorLeftMargin is undefined in template 23 at position.left in class ::VerticalScrollbarCursorBasicDesign for qualifiers {}
// warning: context.scrollbarCursorRightMargin is undefined in template 23 at position.right in class ::VerticalScrollbarCursorBasicDesign for qualifiers {}
// cycle 2 0.131 s
// cycle 3 0.053 s
// end 0.054 s
var globalMessageNodeIndex = 0
var pointerNodeIndex = 1
var nrExports = 23
var exportPaths = [null,["context","displayWidth"],["context","initialPosition"],["context","positionHistory"],["context","positionRedo"],["context","beingDragged"],["context","scrolledDocument"],["context","wasMoved"],["context","scrollToEnd"],["context","beingMoved"],["content","text"],["context","text"],["context","color"],["context","image"],["context","rotate"],["context","blockSize"],["context","height"],["context","width"],["context","scrollStartEdge"],["context","viewLength"],["context","documentLength"],["context","startFirstItemInDoc"],["context","documentFitsInView"]]
var pathToExportId = {"next":{"context":{"next":{"displayWidth":{"value":1},"initialPosition":{"value":2},"positionHistory":{"value":3},"positionRedo":{"value":4},"beingDragged":{"value":5},"scrolledDocument":{"value":6},"wasMoved":{"value":7},"scrollToEnd":{"value":8},"beingMoved":{"value":9},"text":{"value":11},"color":{"value":12},"image":{"value":13},"rotate":{"value":14},"blockSize":{"value":15},"height":{"value":16},"width":{"value":17},"scrollStartEdge":{"value":18},"viewLength":{"value":19},"documentLength":{"value":20},"startFirstItemInDoc":{"value":21},"documentFitsInView":{"value":22}}},"content":{"next":{"text":{"value":10}}}}}

var globalAreasUnderPointerNodeIndex = undefined
var globalDefaultsNodeIndex = undefined
_mq(0, 0, ["message"])
_sp(0, 1) // %0G<W>
_ptr(0, 0, ["pointer"]) // %1G
_v([{start: [_]}], undefined) // %2G
_v([1], undefined) // %3G
_v([{goal: [{color: ["#CD8B8B"], column: [1], height: [2], row: [3], width: [2]}, {color: ["#ADADD8"], column: [2], height: [1], row: [2], width: [2]}, {color: ["#ADADD8"], column: [0], height: [2], row: [0], width: [1]}, {color: ["#ADADD8"], column: [1], height: [2], row: [0], width: [1]}, {color: ["#ADADD8"], column: [2], height: [2], row: [0], width: [1]}, {color: ["#ADADD8"], column: [3], height: [2], row: [0], width: [1]}, {color: ["#ADADD8"], column: [0], height: [1], row: [2], width: [1]}, {color: ["#ADADD8"], column: [1], height: [1], row: [2], width: [1]}, {color: ["#ADADD8"], column: [3], height: [1], row: [3], width: [1]}, {color: ["#ADADD8"], column: [3], height: [1], row: [4], width: [1]}], height: [5], inset: [0.01], radius: [0.1], start: [{color: ["#CD8B8B"], column: [1], height: [2], row: [0], text: ["王將"], width: [2]}, {color: ["#ADADD8"], column: [1], height: [1], row: [2], text: ["玉將"], width: [2]}, {color: ["#ADADD8"], column: [0], height: [2], row: [0], text: ["飛車"], width: [1]}, {color: ["#ADADD8"], column: [3], height: [2], row: [0], text: ["龍王"], width: [1]}, {color: ["#ADADD8"], column: [0], height: [2], row: [2], text: ["角行"], width: [1]}, {color: ["#ADADD8"], column: [3], height: [2], row: [2], text: ["龍馬"], width: [1]}, {color: ["#ADADD8"], column: [1], height: [1], row: [3], text: ["桂馬"], width: [1]}, {color: ["#ADADD8"], column: [2], height: [1], row: [3], text: ["香車"], width: [1]}, {color: ["#ADADD8"], column: [0], height: [1], row: [4], text: ["成香"], width: [1]}, {color: ["#ADADD8"], column: [3], height: [1], row: [4], text: ["歩兵"], width: [1]}], width: [4]},{goal: [{color: ["#CD8B8B"], column: [2], height: [2], row: [2], width: [2]}, {color: ["#ADADD8"], column: [0], height: [1], row: [2], width: [2]}, {color: ["#ADADD8"], column: [1], height: [2], row: [0], width: [1]}, {color: ["#ADADD8"], column: [2], height: [2], row: [0], width: [1]}, {color: ["#ADADD8"], column: [0], height: [2], row: [3], width: [1]}, {color: ["#ADADD8"], column: [1], height: [2], row: [3], width: [1]}, {color: ["#ADADD8"], column: [0], height: [1], row: [0], width: [1]}, {color: ["#ADADD8"], column: [0], height: [1], row: [1], width: [1]}, {color: ["#ADADD8"], column: [2], height: [1], row: [4], width: [1]}, {color: ["#ADADD8"], column: [3], height: [1], row: [4], width: [1]}], height: [5], inset: [0.01], radius: [0.1], start: [{color: ["#CD8B8B"], column: [1], height: [2], row: [2], text: ["王將"], width: [2]}, {color: ["#ADADD8"], column: [1], height: [1], row: [0], text: ["玉將"], width: [2]}, {color: ["#ADADD8"], column: [0], height: [2], row: [0], text: ["飛車"], width: [1]}, {color: ["#ADADD8"], column: [3], height: [2], row: [0], text: ["龍王"], width: [1]}, {color: ["#ADADD8"], column: [0], height: [2], row: [3], text: ["角行"], width: [1]}, {color: ["#ADADD8"], column: [3], height: [2], row: [3], text: ["龍馬"], width: [1]}, {color: ["#ADADD8"], column: [1], height: [1], row: [1], text: ["桂馬"], width: [1]}, {color: ["#ADADD8"], column: [2], height: [1], row: [1], text: ["香車"], width: [1]}, {color: ["#ADADD8"], column: [1], height: [1], row: [4], text: ["成香"], width: [1]}, {color: ["#ADADD8"], column: [2], height: [1], row: [4], text: ["歩兵"], width: [1]}], width: [4]},{blockSize: [100], height: [6], inset: [0.067], radius: [0], start: [{color: ["hsl(0,100%,50%)"], column: [0], direction: ["horizontal"], height: [1], row: [2], text: ["X"], width: [2]}, {color: ["hsl(45,60%,80%)"], column: [1], direction: ["horizontal"], height: [1], row: [3], width: [3]}, {color: ["hsl(135,60%,80%)"], column: [0], direction: ["vertical"], height: [3], row: [3], width: [1]}, {color: ["hsl(215,60%,80%)"], column: [4], direction: ["vertical"], height: [3], row: [2], width: [1]}, {color: ["hsl(30,60%,80%)"], column: [2], direction: ["horizontal"], height: [1], row: [0], width: [2]}, {color: ["hsl(90,60%,80%)"], column: [4], direction: ["horizontal"], height: [1], row: [0], width: [2]}, {color: ["hsl(150,60%,80%)"], column: [4], direction: ["horizontal"], height: [1], row: [1], width: [2]}, {color: ["hsl(60,60%,80%)"], column: [1], direction: ["vertical"], height: [2], row: [0], width: [1]}, {color: ["hsl(120,60%,80%)"], column: [3], direction: ["vertical"], height: [2], row: [1], width: [1]}, {color: ["hsl(180,60%,80%)"], column: [5], direction: ["vertical"], height: [2], row: [2], width: [1]}, {color: ["hsl(240,60%,80%)"], column: [2], direction: ["vertical"], height: [2], row: [4], width: [1]}, {color: ["hsl(300,60%,80%)"], column: [5], direction: ["vertical"], height: [2], row: [4], width: [1]}], width: [6]},{blockSize: [100], goal: [{color: ["#A70016"], column: [4], height: [1], row: [2], text: ["X"], width: [2]}], height: [6], inset: [0.067], radius: [0], start: [{color: ["hsl(30,60%,80%)"], column: [0], direction: ["horizontal"], height: [1], row: [0], width: [2]}, {color: ["hsl(60,60%,80%)"], column: [2], direction: ["horizontal"], height: [1], row: [0], width: [2]}, {color: ["hsl(90,60%,80%)"], column: [4], direction: ["vertical"], height: [2], row: [0], width: [1]}, {color: ["hsl(120,60%,80%)"], column: [2], direction: ["vertical"], height: [2], row: [1], width: [1]}, {color: ["hsl(150,60%,80%)"], column: [5], direction: ["vertical"], height: [3], row: [1], width: [1]}, {color: ["hsl(180,60%,80%)"], column: [1], direction: ["vertical"], height: [2], row: [2], width: [1]}, {color: ["hsl(0,100%,50%)"], column: [3], direction: ["horizontal"], height: [1], row: [2], text: ["X"], width: [2]}, {color: ["hsl(210,60%,80%)"], column: [3], direction: ["horizontal"], height: [1], row: [3], width: [2]}, {color: ["hsl(240,60%,80%)"], column: [0], direction: ["vertical"], height: [3], row: [3], width: [1]}, {color: ["hsl(270,60%,80%)"], column: [4], direction: ["horizontal"], height: [1], row: [4], width: [2]}, {color: ["hsl(300,60%,80%)"], column: [3], direction: ["vertical"], height: [2], row: [4], width: [1]}, {color: ["hsl(330,60%,80%)"], column: [1], direction: ["horizontal"], height: [1], row: [5], width: [2]}, {color: ["hsl(360,60%,80%)"], column: [4], direction: ["horizontal"], height: [1], row: [5], width: [2]}], width: [6]},{blockSize: [100], goal: [{color: ["lightgrey"], column: [0], height: [1], row: [0], text: ["1"], width: [1]}, {color: ["lightgrey"], column: [1], height: [1], row: [0], text: ["2"], width: [1]}, {color: ["lightgrey"], column: [2], height: [1], row: [0], text: ["3"], width: [1]}, {color: ["lightgrey"], column: [3], height: [1], row: [0], text: ["4"], width: [1]}, {color: ["lightgrey"], column: [0], height: [1], row: [1], text: ["5"], width: [1]}, {color: ["lightgrey"], column: [1], height: [1], row: [1], text: ["6"], width: [1]}, {color: ["lightgrey"], column: [2], height: [1], row: [1], text: ["7"], width: [1]}, {color: ["lightgrey"], column: [3], height: [1], row: [1], text: ["8"], width: [1]}, {color: ["lightgrey"], column: [0], height: [1], row: [2], text: ["9"], width: [1]}, {color: ["lightgrey"], column: [1], height: [1], row: [2], text: ["10"], width: [1]}, {color: ["lightgrey"], column: [2], height: [1], row: [2], text: ["11"], width: [1]}, {color: ["lightgrey"], column: [3], height: [1], row: [2], text: ["12"], width: [1]}, {color: ["lightgrey"], column: [0], height: [1], row: [3], text: ["13"], width: [1]}, {color: ["lightgrey"], column: [1], height: [1], row: [3], text: ["14"], width: [1]}, {color: ["lightgrey"], column: [2], height: [1], row: [3], text: ["15"], width: [1]}], height: [4], inset: [0.067], radius: [0], showTextInPreview: [true], start: [{color: ["lightgrey"], column: [0], height: [1], row: [0], text: ["15"], width: [1]}, {color: ["lightgrey"], column: [1], height: [1], row: [0], text: ["2"], width: [1]}, {color: ["lightgrey"], column: [2], height: [1], row: [0], text: ["1"], width: [1]}, {color: ["lightgrey"], column: [3], height: [1], row: [0], text: ["12"], width: [1]}, {color: ["lightgrey"], column: [0], height: [1], row: [1], text: ["8"], width: [1]}, {color: ["lightgrey"], column: [1], height: [1], row: [1], text: ["5"], width: [1]}, {color: ["lightgrey"], column: [2], height: [1], row: [1], text: ["6"], width: [1]}, {color: ["lightgrey"], column: [3], height: [1], row: [1], text: ["11"], width: [1]}, {color: ["lightgrey"], column: [0], height: [1], row: [2], text: ["4"], width: [1]}, {color: ["lightgrey"], column: [1], height: [1], row: [2], text: ["9"], width: [1]}, {color: ["lightgrey"], column: [2], height: [1], row: [2], text: ["10"], width: [1]}, {color: ["lightgrey"], column: [3], height: [1], row: [2], text: ["7"], width: [1]}, {color: ["lightgrey"], column: [0], height: [1], row: [3], text: ["3"], width: [1]}, {color: ["lightgrey"], column: [1], height: [1], row: [3], text: ["14"], width: [1]}, {color: ["lightgrey"], column: [2], height: [1], row: [3], text: ["13"], width: [1]}], width: [4]}], undefined) // %4G
_v([false], undefined) // %5G
_v([{areaSetContent: [{start: [_]}]}], undefined) // %6G
_v([{goal: [_]}], undefined) // %7G
_v([0], undefined) // %8G
_v(constEmptyOS, undefined) // %9G
_v([{type: ["top"]}], undefined) // %10G
_v([{type: ["bottom"]}], undefined) // %11G
_v([91], undefined) // %12G
_v([{label: ["scrolledDocumentStart"]}], undefined) // %13G
_v([true], undefined) // %14G
_a(0, 0, {App:_n(undefined,14)}, false) // %15G
_v(0, true) // %16G
_v([{pointerInArea: [_]}], undefined) // %17G
_v({color: "grey", horizontal: 0, vertical: 0, blurRadius: 3}, false) // %18G
_v(1, false) // %19G
_a(0, 0, {HuaRongDaoWithLabel:_n(undefined,14), HighLightOnHover:_n(undefined,14), FlipButton:_n(undefined,14), DepressWhileMouseDown:_n(undefined,14), Clickable:_n(undefined,14), AreaWithPopUpInPositioningPoints:_n(undefined,14), AreaWithPopUp:_n(undefined,14), AreaWithPopUpContext:_n(undefined,14)}, false) // %20G
_v("top", true) // %21G
_v({type: "top"}, false) // %22G
_f(0, 0, empty, [_n(undefined,9)]) // %23G
_bg(1, 0, _n(undefined,23), _n(undefined,8)) // %24G
_v({type: "right"}, false) // %25G
_v("left", true) // %26G
_v([24], undefined) // %27G
_f(0, 0, empty, [_n(undefined,27)]) // %28G
_co(1, 0, _n(undefined,28), [{on:_n(undefined,14), use:_n(undefined,8)}, {on:_n(undefined,5), use:_n(undefined,27)}]) // %29G
_v([20], undefined) // %30G
_v([{width: [_]}], undefined) // %31G
_v({text: {fontFamily: "Roboto", fontWeight: 100, color: "grey", fontSize: 14, value: "INITIAL CONFIGURATION"}}, false) // %32G
_v([6], undefined) // %33G
_v([{height: [_]}], undefined) // %34G
_v([{subType: ["Click", "DoubleClick"], type: ["MouseUp"]}], undefined) // %35G
_v([{type: ["MouseDown"]}], undefined) // %36G
_v([{recipient: ["end"], type: ["MouseUp"]}], undefined) // %37G
_f(1, 0, internalApply, [_n(undefined,37), _n(undefined,0)])
_sp(0, 1) // %38G
_a(0, 0, {TextLabel:_n(undefined,14)}, false) // %39G
_v(20, true) // %40G
_v([{backgroundTile: [_]}], undefined) // %41G
_v(["x","y"], undefined) // %42G
_a(0, 0, {HuaRongDaoPreview:_n(undefined,14), HuaRongDaoBase:_n(undefined,14)}, false) // %43G
_v("bottom", true) // %44G
_v({type: "horizontal-center"}, false) // %45G
_v("horizontal-center", true) // %46G
_v([{showTextInPreview: [_]}], undefined) // %47G
_v([{text: [_]}], undefined) // %48G
_v([{areaSetContent: [_]}], undefined) // %49G
_v(11, false) // %50G
_v(36, false) // %51G
_v("sans-serif", true) // %52G
_v("italic", true) // %53G
_v("white", true) // %54G
_v([{color: [_]}], undefined) // %55G
_v([{image: [_]}], undefined) // %56G
_v("100%", false) // %57G
_v([{rotate: [_]}], undefined) // %58G
_v([{inset: [_]}], undefined) // %59G
_v("solid", true) // %60G
_v([{radius: [_]}], undefined) // %61G
_a(0, 0, {Block:_n(undefined,14)}, false) // %62G
_v(undefined, true) // %63G
_v("left", false) // %64G
_v(true, false) // %65G
_v({type: "left"}, false) // %66G
_v([{column: [_]}], undefined) // %67G
_v("top", false) // %68G
_v([{row: [_]}], undefined) // %69G
_v(["embedding"], undefined) // %70G
_a(0, 0, {PopUpContext:_n(undefined,14), BlockEvents:_n(undefined,14)}, false) // %71G
_q(0, 0, [[], [], []]) // %72G
_v([{type: ["left"]}], undefined) // %73G
_v({type: ["left"]}, false) // %74G
_v([-6], undefined) // %75G
_v({type: ["top"]}, false) // %76G
_v(["start"], undefined) // %77G
_v(["end"], undefined) // %78G
_v(["MouseDown"], undefined) // %79G
_v([{key: ["Esc"], recipient: ["global"], type: ["KeyDown"]}], undefined) // %80G
_v([{type: [true]}], undefined) // %81G
_v(["expression"], undefined) // %82G
_a(0, 0, {InitialConfigurationMatrix:_n(undefined,14)}, false) // %83G
_v(440, true) // %84G
_v(580, true) // %85G
_v({background: "white", boxShadow: {color: "grey", horizontal: 0, vertical: 0, blurRadius: 3}}, false) // %86G
_a(0, 0, {FixedMatrix:_n(undefined,14)}, false) // %87G
_v(5, true) // %88G
_v([{subType: ["Click"], type: ["MouseUp"]}], undefined) // %89G
_v([{areaSetAttr: [_]}], undefined) // %90G
_a(0, 0, {HuaRongDaoPreview:_n(undefined,14), HuaRongDaoBase:_n(undefined,14), HighLightOnHover:_n(undefined,14), WriteConfigOnClick:_n(undefined,14), FixedMatrixCell:_n(undefined,14)}, false) // %91G
_v([2], undefined) // %92G
_v([120], undefined) // %93G
_v([{content: [true], type: ["left"]}], undefined) // %94G
_v([{content: [true], type: ["right"]}], undefined) // %95G
_v([40], undefined) // %96G
_v([10], undefined) // %97G
_v(100, true) // %98G
_v(["reset"], undefined) // %99G
_a(0, 0, {HuaRongDaoWithLabel:_n(undefined,14)}, false) // %100G
_v({text: {fontFamily: "Roboto", fontWeight: 100, color: "grey", fontSize: 14, value: "GOAL CONFIGURATION"}}, false) // %101G
_v("grey", true) // %102G
_v(2, true) // %103G
_a(0, 0, {HuaRongDao:_n(undefined,14), HuaRongDaoBase:_n(undefined,14)}, false) // %104G
_v([{blockSize: [_]}], undefined) // %105G
_v([100], undefined) // %106G
_v([{msg: ["reset"]}], undefined) // %107G
_v({top: 0.1, left: 0.1}, false) // %108G
_v(36, true) // %109G
_a(0, 0, {Block:_n(undefined,14), Draggable:_n(undefined,14), Clickable:_n(undefined,14), StorePositionInHistory:_n(undefined,14)}, false) // %110G
_v([{direction: [_]}], undefined) // %111G
_v(["horizontal"], undefined) // %112G
_v(-25, true) // %113G
_v(-20, true) // %114G
_v(true, true) // %115G
_v(["vertical"], undefined) // %116G
_v({type: "top", element: [new ElementReference("p1")]}, false) // %117G
_v(-15, true) // %118G
_v({type: "left", element: [new ElementReference("p1")]}, false) // %119G
_v([{left: [_]}], undefined) // %120G
_v("right", false) // %121G
_v([{top: [_]}], undefined) // %122G
_v({type: "bottom"}, false) // %123G
_v("bottom", false) // %124G
_v(["undo"], undefined) // %125G
_v(["top"], undefined) // %126G
_v(["left"], undefined) // %127G
_v([-1], undefined) // %128G
_rco(0, 0, [_n(undefined,8), _n(undefined,128)])
_sp(0, 1) // %129G
_v(["redo"], undefined) // %130G
_v([{element: [new ElementReference("p1")], type: ["top"]}], undefined) // %131G
_v([{element: [new ElementReference("p1")], type: ["left"]}], undefined) // %132G
_v("or", true) // %133G
_v(-1, true) // %134G
_v("right", true) // %135G
_v(13, false) // %136G
_v(14, false) // %137G
_v(["underline"], undefined) // %138G
_v("black", true) // %139G
_v("Roboto", true) // %140G
_v("RESET", true) // %141G
_a(0, 0, {TextButton:_n(undefined,14), Clickable:_n(undefined,14), TextLabel:_n(undefined,14)}, false) // %142G
_v([12], undefined) // %143G
_f(0, 0, empty, [_n(undefined,143)]) // %144G
_co(1, 0, _n(undefined,144), [{on:_n(undefined,14), use:_n(undefined,8)}, {on:_n(undefined,5), use:_n(undefined,143)}]) // %145G
_v("black", false) // %146G
_v("grey", false) // %147G
_v("UNDO", true) // %148G
_v("REDO", true) // %149G
_v({text: {fontFamily: "Roboto", fontWeight: 100, color: "grey", fontSize: 14, value: "HISTORY"}}, false) // %150G
_a(0, 0, {VerticalScrollableWithScrollbarBasicDesign:_n(undefined,14), UniformScrollableWithScrollbar:_n(undefined,14), ScrollableWithScrollbarExt:_n(undefined,14), ScrollableWithControllerExt:_n(undefined,14), ScrolledDocumentContext:_n(undefined,14), UniformScrollableWithController:_n(undefined,14)}, false) // %151G
_v([15], undefined) // %152G
_v([32], undefined) // %153G
_f(0, 0, empty, [_n(undefined,153)]) // %154G
_co(1, 0, _n(undefined,154), [{on:_n(undefined,14), use:_n(undefined,8)}, {on:_n(undefined,5), use:_n(undefined,153)}]) // %155G
_a(0, 0, {ScrollView:_n(undefined,14), VerticalScrolledViewBasicDesign:_n(undefined,14)}, false) // %156G
_f(0, 0, max, [_n(undefined,8), _n(undefined,8)]) // %157G
_a(0, 0, {DraggableScrolledDocumentExt:_n(undefined,14), Draggable:_n(undefined,14), Clickable:_n(undefined,14), ScrollableDocumentWithControllerExt:_n(undefined,14), UniformItemScrolledDocumentExt:_n(undefined,14), ScrolledDocument:_n(undefined,14), MoveableScrolledDocument:_n(undefined,14), ScrollStartAndEndEdges:_n(undefined,14)}, false) // %158G
_v([16], undefined) // %159G
_v(["scrolledDocumentStart"], undefined) // %160G
_v([{label: ["scrolledDocumentStart"], type: ["top"]}], undefined) // %161G
_v([-15], undefined) // %162G
_v({label: "scrolledDocumentStart"}, false) // %163G
_v({label: "scrolledDocumentEnd"}, false) // %164G
_v({min: 0, point1: {label: "scrolledDocumentStart"}, point2: {type: ["top"]}, priority: -5}, false) // %165G
_v({max: 0, point1: {label: "scrolledDocumentEnd"}, point2: {type: ["bottom"]}, priority: -7, orGroups: {label: "notBeyondEndOrStayAtStart"}}, false) // %166G
_v({max: 0, point1: {label: "scrolledDocumentStart"}, point2: {type: ["top"]}, priority: -7, orGroups: {label: "notBeyondEndOrStayAtStart"}}, false) // %167G
_v([-25], undefined) // %168G
_v([-10], undefined) // %169G
_v({type: ["bottom"]}, false) // %170G
_v(4, true) // %171G
_v(8, true) // %172G
_v("scrolledDocumentStart", false) // %173G
_v([75], undefined) // %174G
_v(["bottom"], undefined) // %175G
_v({background: [], opacity: [0]}, false) // %176G
_a(0, 0, {Scrollbar:_n(undefined,14), ScrollStartAndEndEdges:_n(undefined,14), VerticalScrollbarBasicDesign:_n(undefined,14)}, false) // %177G
_v([0.5], undefined) // %178G
_v(0, false) // %179G
_v(8, false) // %180G
_v({background: ["grey"], opacity: [0.5], borderRadius: [4]}, false) // %181G
_a(0, 0, {Cursor:_n(undefined,14), Draggable:_n(undefined,14), Clickable:_n(undefined,14), VerticalScrollbarCursorBasicDesign:_n(undefined,14)}, false) // %182G

initAreaTemplate()
_ac(undefined, undefined, 0, true) // area template create 1
_mq(0, 0, ["message"]) // %0L1
_par(0, 0, ["param"]) // %1L1
_cnp(undefined)
_ae(1, undefined, undefined, undefined, undefined) // area template expr 1
_ac(1, "app", 0, true) // area template create 2
_mq(0, 0, ["message"]) // %0L2
_par(0, 0, ["param"]) // %1L2
_w(1, 0, ["context","configurationIndex"], _n(undefined,3),false)
_sp(0, 1) // %2L2<W>
_f(2, 0, pos, [_n(0,2), _n(undefined,4)])
_sp(0, 1) // %3L2
_f(3, 0, internalApply, [_n(undefined,2), _n(0,3)]) // %4L2
_f(1, 0, me, [])
_sp(0, 1) // %5L2
_f(3, 0, internalApply, [_n(undefined,7), _n(0,3)]) // %6L2
_d(2, 0, "game", _n(0,5))
_sp(0, 1) // %7L2
_d(5, 0, "blocks", _n(0,7))
_sp(0, 1) // %8L2
_f(6, 0, first, [_n(0,8)])
_sp(0, 1) // %9L2
_p(7, 0, 3, _n(0,9))
_sp(0, 1) // %10L2
_f(8, 0, size, [_n(0,10)])
_sp(0, 1) // %11L2
_f(9, 0, notEqual, [_n(undefined,8), _n(0,11)]) // %12L2
_q(10, 0, [[_g(_n(0,12), true)]]) // %13L2
_f(9, 0, minus, [_n(0,11), _n(undefined,3)]) // %14L2
_a(3, 0, {type:_n(undefined,21), element:_n(0,7)}, false) // %15L2
_a(4, 0, {point1:_n(0,15), point2:_n(undefined,22), equals:_nt(undefined,24)}, false) // %16L2
_a(3, 0, {type:_n(undefined,26), element:_n(0,7)}, false) // %17L2
_a(4, 0, {point1:_n(undefined,25), point2:_n(0,17), equals:_nt(undefined,29)}, false) // %18L2
_f(3, 0, internalApply, [_n(undefined,31), _n(0,3)]) // %19L2
_f(4, 0, mul, [_n(undefined,30), _n(0,19)]) // %20L2
_f(3, 0, internalApply, [_n(undefined,34), _n(0,3)]) // %21L2
_f(4, 0, mul, [_n(undefined,30), _n(0,21)]) // %22L2
_f(5, 0, plus, [_n(0,22), _n(undefined,30)]) // %23L2
_f(6, 0, plus, [_n(0,23), _n(undefined,33)]) // %24L2
_f(3, 0, internalApply, [_n(undefined,41), _n(0,3)]) // %25L2
_q(4, 0, [[_g(_n(0,25), true)]]) // %26L2
_a(4, 0, {image:_nf(0,25), repeat:_nf(undefined,42)}, false) // %27L2
_a(5, 0, {background:_nf(0,27)}, false) // %28L2
_m1(6, 0, _n(0,26), _n(0,28)) // %29L2
_f(4, 0, mul, [_n(0,21), _n(undefined,30)]) // %30L2
_f(4, 0, mul, [_n(0,19), _n(undefined,30)]) // %31L2
_f(3, 0, internalApply, [_n(undefined,47), _n(0,3)]) // %32L2
_q(4, 0, [[_g(_n(0,32), false)], []]) // %33L2
_q(4, 0, [[_g(_n(0,32), true)], []]) // %34L2
_m(5, 0, _n(0,34), [_n(undefined,50), _n(undefined,51)]) // %35L2
_f(3, 0, internalApply, [_n(undefined,59), _n(0,3)]) // %36L2
_f(4, 0, mul, [_n(0,36), _n(undefined,30)]) // %37L2
_f(5, 0, round, [_n(0,37)]) // %38L2
_f(6, 0, max, [_n(undefined,3), _n(0,38)]) // %39L2
_f(3, 0, internalApply, [_n(undefined,61), _n(0,3)]) // %40L2
_f(4, 0, mul, [_n(0,40), _n(undefined,30)]) // %41L2
_f(5, 0, round, [_n(0,41)]) // %42L2
_a(3, 0, {msg:_n(undefined,99), recipient:_n(0,7)}, undefined)
_sp(0, 1) // %43L2
_d(2, 0, "initial", _n(0,5)) // %44L2
_a(3, 0, {type:_n(undefined,44), element:_n(0,44)}, false) // %45L2
_a(4, 0, {point1:_n(0,45), point2:_n(undefined,22), equals:_nt(undefined,29)}, false) // %46L2
_a(3, 0, {type:_n(undefined,46), element:_n(0,44)}, false) // %47L2
_a(4, 0, {point1:_n(undefined,45), point2:_n(0,47), equals:_nt(undefined,24)}, false) // %48L2
_f(6, 0, plus, [_n(0,23), _n(undefined,8)]) // %49L2
_q(4, 0, [[_g(_n(0,25), true)]]) // %50L2
_m1(6, 0, _n(0,50), _n(0,28)) // %51L2
_q(4, 0, [[_g(_n(0,32), false)], []]) // %52L2
_q(4, 0, [[_g(_n(0,32), true)], []]) // %53L2
_m(5, 0, _n(0,53), [_n(undefined,50), _n(undefined,51)]) // %54L2
_q(4, 0, [[_g(_n(0,25), true)]]) // %55L2
_m1(5, 0, _n(0,55), _n(0,27)) // %56L2
_a(6, 0, {borderColor:_n(undefined,102), borderWidth:_n(undefined,103), borderStyle:_n(undefined,60), background:_nf(0,56)}, false) // %57L2
_f(3, 0, internalApply, [_n(undefined,105), _n(0,3)])
_sp(0, 1) // %58L2
_f(4, 0, empty, [_n(0,58)])
_sp(0, 1) // %59L2
_co(5, 0, _n(0,59), [{on:_n(undefined,14), use:_n(undefined,106)}, {on:_n(undefined,5), use:_n(0,58)}])
_sp(0, 1) // %60L2
_f(6, 0, mul, [_n(0,21), _n(0,60)]) // %61L2
_f(6, 0, mul, [_n(0,19), _n(0,60)]) // %62L2
_f(6, 0, mul, [_n(0,36), _n(0,60)]) // %63L2
_f(7, 0, round, [_n(0,63)]) // %64L2
_f(8, 0, max, [_n(undefined,3), _n(0,64)]) // %65L2
_f(6, 0, mul, [_n(0,40), _n(0,60)]) // %66L2
_f(7, 0, round, [_n(0,66)]) // %67L2
_a(3, 0, {type:_n(undefined,44), element:_n(0,7)}, false) // %68L2
_a(4, 0, {point1:_n(0,68), point2:_n(undefined,22), equals:_nt(undefined,145)}, false) // %69L2
_a(4, 0, {point1:_n(0,17), point2:_n(undefined,66), equals:_nt(undefined,24)}, false) // %70L2
_p(6, 0, 3, _n(0,8))
_sp(0, 1) // %71L2
_f(7, 0, bool, [_n(0,71)])
_sp(0, 1) // %72L2
_q(8, 0, [[_g(_n(0,72), true)]])
_sp(0, 1) // %73L2
_q(8, 0, [[_g(_n(0,72), true)], []]) // %74L2
_m(9, 0, _n(0,74), [_n(undefined,146), _n(undefined,147)]) // %75L2
_m1(9, 0, _n(0,73), _n(undefined,14)) // %76L2
_a(10, 0, {TextButton:_n(undefined,14), Clickable:_n(0,76), TextLabel:_n(undefined,14)}, false) // %77L2
_a(3, 0, {type:_n(undefined,46), element:_n(0,7)}, false) // %78L2
_a(4, 0, {point1:_n(undefined,45), point2:_n(0,78), equals:_nt(undefined,24)}, false) // %79L2
_m1(9, 0, _n(0,73), _n(undefined,0))
_sp(0, 1) // %80L2<W>
_a(3, 0, {msg:_n(undefined,125), recipient:_n(0,7)}, undefined)
_sp(0, 1) // %81L2
_m1(9, 0, _n(0,73), _n(0,81))
_sp(0, 1) // %82L2
_p(6, 0, 4, _n(0,8))
_sp(0, 1) // %83L2
_f(7, 0, bool, [_n(0,83)])
_sp(0, 1) // %84L2
_q(8, 0, [[_g(_n(0,84), true)]])
_sp(0, 1) // %85L2
_q(8, 0, [[_g(_n(0,84), true)], []]) // %86L2
_m(9, 0, _n(0,86), [_n(undefined,146), _n(undefined,147)]) // %87L2
_m1(9, 0, _n(0,85), _n(undefined,14)) // %88L2
_a(10, 0, {TextButton:_n(undefined,14), Clickable:_n(0,88), TextLabel:_n(undefined,14)}, false) // %89L2
_a(3, 0, {type:_n(undefined,135), element:_n(0,7)}, false) // %90L2
_a(4, 0, {point1:_n(0,90), point2:_n(undefined,25), equals:_nt(undefined,24)}, false) // %91L2
_m1(9, 0, _n(0,85), _n(undefined,0))
_sp(0, 1) // %92L2<W>
_a(3, 0, {msg:_n(undefined,130), recipient:_n(0,7)}, undefined)
_sp(0, 1) // %93L2
_m1(9, 0, _n(0,85), _n(0,93))
_sp(0, 1) // %94L2
_d(2, 0, "history", _n(0,5)) // %95L2
_a(3, 0, {type:_n(undefined,46), element:_n(0,95)}, false) // %96L2
_a(4, 0, {point1:_n(undefined,45), point2:_n(0,96), equals:_nt(undefined,24)}, false) // %97L2
_f(4, 0, mul, [_n(undefined,152), _n(0,19)]) // %98L2
_f(5, 0, plus, [_n(0,98), _n(undefined,97)]) // %99L2
_d(2, 0, "historyText", _n(0,5)) // %100L2
_a(3, 0, {type:_n(undefined,44), element:_n(0,100)}, false) // %101L2
_a(4, 0, {point1:_n(0,101), point2:_n(undefined,22), equals:_nt(undefined,24)}, false) // %102L2
_a(4, 0, {point1:_n(0,90), point2:_n(undefined,66), equals:_nt(undefined,155)}, false) // %103L2
_a(4, 0, {point1:_n(0,68), point2:_n(undefined,123), equals:_nt(undefined,24)}, false) // %104L2
_f(9, 0, changed, [_n(0,11)])
_sp(0, 1) // %105L2
_f(9, 0, mul, [_n(0,11), _n(undefined,12)]) // %106L2
_f(10, 0, minus, [_n(0,106), _n(undefined,159)]) // %107L2
_a(11, 0, {equals:_nt(0,107), point1:_n(undefined,163), point2:_n(undefined,164)}, false) // %108L2
_q(4, 0, [[_g(_n(0,25), true)]]) // %109L2
_m1(6, 0, _n(0,109), _n(0,28)) // %110L2
_m1(11, 0, _n(0,13), _n(undefined,14)) // %111L2
_a(12, 0, {HuaRongDaoPreview:_n(undefined,14), HuaRongDaoBase:_n(undefined,14), ScrolledItem:_n(0,111), VerticalScrolledItemBasicDesign:_n(undefined,14)}, false) // %112L2
_f(4, 0, mul, [_n(0,21), _n(undefined,152)]) // %113L2
_f(4, 0, mul, [_n(0,19), _n(undefined,152)]) // %114L2
_m1(11, 0, _n(0,13), _n(undefined,126)) // %115L2
_a(12, 0, {type:_nf(0,115)}, false) // %116L2
_m1(12, 0, _n(0,13), _n(0,111)) // %117L2
_q(13, 0, [[_g(_n(0,12), true), _g(_n(0,117), true), _g(_n(0,115), o("right","bottom"))], [_g(_n(0,12), true), _g(_n(0,117), true)]]) // %118L2
_q(13, 0, [[_g(_n(0,12), true), _g(_n(0,117), true)]]) // %119L2
_m1(11, 0, _n(0,13), _n(undefined,175)) // %120L2
_a(12, 0, {type:_nf(0,120)}, false) // %121L2
_m1(14, 0, _n(0,119), _n(0,121)) // %122L2
_q(4, 0, [[_g(_n(0,32), true)], [_g(_n(0,32), false)], []]) // %123L2
_q(4, 0, [[_g(_n(0,32), true)], []]) // %124L2
_m(5, 0, _n(0,124), [_n(undefined,50), _n(undefined,51)]) // %125L2
_f(4, 0, mul, [_n(0,36), _n(undefined,152)]) // %126L2
_f(5, 0, round, [_n(0,126)]) // %127L2
_f(6, 0, max, [_n(undefined,3), _n(0,127)]) // %128L2
_f(4, 0, mul, [_n(0,40), _n(undefined,152)]) // %129L2
_f(5, 0, round, [_n(0,129)]) // %130L2
_p(6, 0, 15, _n(0,7)) // %131L2
_cnp({"App":1})
_ae(2, undefined, {frame:_n(undefined,16)}, undefined, {"0":_n(undefined,15)}) // area template expr 2
_ac(2, "initial", 0, true) // area template create 3
_mq(0, 0, ["message"])
_sp(0, 1) // %0L3
_par(0, 0, ["param"]) // %1L3
_w(1, 0, ["context","showPopUp"], _n(undefined,5),false)
_sp(0, 1) // %2L3<W>
_q(2, 0, [[_g(_n(0,2), true)]]) // %3L3
_m1(3, 0, _n(0,3), _n(1,5)) // %4L3
_f(1, 0, internalApply, [_n(undefined,17), _n(0,1)]) // %5L3
_q(2, 0, [[_g(_n(0,5), true)]]) // %6L3
_m1(3, 0, _n(0,6), _n(undefined,18)) // %7L3
_w(1, 0, ["context","selected"], _n(undefined,5),true)
_sp(0, 1) // %8L3<W>
_q(2, 0, [[_g(_n(0,8), true)]])
_sp(0, 1) // %9L3
_m1(3, 0, _n(0,9), _n(undefined,19)) // %10L3
_a(4, 0, {boxShadow:_nf(0,7), padding:_nf(0,10)}, false) // %11L3
_f(1, 0, me, []) // %12L3
_d(2, 0, "label", _n(0,12)) // %13L3
_p(3, 0, 1, _n(0,13)) // %14L3
_f(5, 0, max, [_n(1,20), _n(0,14)]) // %15L3
_f(6, 0, plus, [_n(0,15), _n(undefined,33)]) // %16L3
_f(1, 0, internalApply, [_n(undefined,35), _n(0,0)])
_sp(0, 1) // %17L3
_f(2, 0, not, [_n(0,2)])
_sp(0, 1) // %18L3
_q(2, 0, [[_g(_n(0,8), false)]])
_sp(0, 1) // %19L3
_f(1, 0, internalApply, [_n(undefined,36), _n(0,0)])
_sp(0, 1) // %20L3
_m1(3, 0, _n(0,19), _n(0,20))
_sp(0, 1) // %21L3
_m1(3, 0, _n(0,19), _n(0,8))
_sp(0, 1) // %22L3<W>
_m1(3, 0, _n(0,19), _n(undefined,14))
_sp(0, 1) // %23L3
_m1(3, 0, _n(0,9), _n(undefined,38))
_sp(0, 1) // %24L3
_m1(3, 0, _n(0,9), _n(0,8))
_sp(0, 1) // %25L3<W>
_m1(3, 0, _n(0,9), _n(undefined,5))
_sp(0, 1) // %26L3
_a(3, 0, {type:_n(undefined,44), element:_n(0,13)}, false) // %27L3
_a(4, 0, {point1:_n(0,27), point2:_n(undefined,22), equals:_nt(undefined,24)}, false) // %28L3
_a(3, 0, {type:_n(undefined,46), element:_n(0,13)}, false) // %29L3
_a(4, 0, {point1:_n(undefined,45), point2:_n(0,29), equals:_nt(undefined,24)}, false) // %30L3
_a(2, 0, {element:_n(0,12)}, undefined) // %31L3
_m(3, 0, _n(undefined,72), [_n(undefined,73), _n(0,31), _n(undefined,9)]) // %32L3
_a(4, 0, {point1:_nf(0,32), point2:_n(undefined,74), equals:_n(undefined,75)}, false) // %33L3
_m(3, 0, _n(undefined,72), [_n(undefined,10), _n(0,31), _n(undefined,9)]) // %34L3
_a(4, 0, {point1:_nf(0,34), point2:_n(undefined,76), equals:_n(undefined,75)}, false) // %35L3
_cnp({"HuaRongDaoWithLabel":1,"HighLightOnHover":2,"FlipButton":3,"DepressWhileMouseDown":4,"Clickable":5,"AreaWithPopUpInPositioningPoints":6,"AreaWithPopUp":7,"AreaWithPopUpContext":8})
_acc(3, {"popup":{data:undefined,partner:_n(0,4)}})
_ae(3, _n(0,11), {top:_n(1,16), right:_n(1,18), width:_n(0,16), height:_n(1,24)}, undefined, {"0":_n(undefined,20)}) // area template expr 3
_aw(3, "onClick", _n(0,17), undefined, {switchValue:_tm(_n(0,2), _n(0,18), 3)}, undefined, undefined, 2)
_aw(3, "onClickableMouseDown", _n(0,21), undefined, {selected:_tm(_n(0,22), _n(0,23), 5)}, undefined, undefined, 4)
_aw(3, "onClickableMouseUp", _n(0,24), undefined, {selected:_tm(_n(0,25), _n(0,26), 5)}, undefined, undefined, 4)
_ac(3, "label", 0, true) // area template create 4
_mq(0, 0, ["message"]) // %0L4
_par(0, 0, ["param"]) // %1L4
_f(1, 0, displayWidth, [_n(undefined,32), _n(undefined,9)]) // %2L4
_cnp({"TextLabel":1})
_ae(4, _n(undefined,32), {top:_n(undefined,16), left:_n(undefined,16), right:_n(undefined,16), width:_n(undefined,9), height:_n(undefined,40)}, undefined, {"0":_n(undefined,39), "1":_n(0,2)}) // area template expr 4
_ac(3, "configuration", 0, true) // area template create 5
_mq(0, 0, ["message"]) // %0L5
_par(0, 0, ["param"]) // %1L5
_f(1, 0, me, []) // %2L5
_a(2, 0, {type:_n(undefined,64), element:_n(0,2), content:_n(undefined,65)}, false) // %3L5
_a(2, 0, {type:_n(undefined,68), element:_n(0,2), content:_n(undefined,65)}, false) // %4L5
_cnp({"HuaRongDaoPreview":1,"HuaRongDaoBase":2})
_acc(5, {"blocks":{data:_n(2,4),partner:undefined}})
_ae(5, _n(2,29), {top:_n(1,28), horizontalCenter:_n(1,30), "content-height":_n(2,30), "content-width":_n(2,31)}, undefined, {"0":_n(undefined,43)}) // area template expr 5
_ac(5, "blocks", 4, true) // area template create 6
_mq(0, 0, ["message"]) // %0L6
_par(0, 0, ["param"]) // %1L6
_f(5, 0, internalApply, [_n(undefined,49), _n(0,1)]) // %2L6
_f(6, 0, internalApply, [_n(undefined,48), _n(0,2)]) // %3L6
_m(7, 0, _n(3,33), [_n(undefined,9), _n(0,3)]) // %4L6
_a(8, 0, {value:_nf(0,4), fontSize:_nf(3,35), fontFamily:_n(undefined,52), fontVariant:_n(undefined,53), color:_n(undefined,54)}, false) // %5L6
_f(6, 0, internalApply, [_n(undefined,55), _n(0,2)]) // %6L6
_q(7, 0, [[_g(_n(0,6), true)]]) // %7L6
_m1(8, 0, _n(0,7), _n(0,6)) // %8L6
_f(6, 0, internalApply, [_n(undefined,56), _n(0,2)]) // %9L6
_q(7, 0, [[_g(_n(0,9), true)]]) // %10L6
_a(7, 0, {src:_nf(0,9), size:_nf(undefined,57)}, false) // %11L6
_m1(8, 0, _n(0,10), _n(0,11)) // %12L6
_f(6, 0, internalApply, [_n(undefined,58), _n(0,2)]) // %13L6
_a(7, 0, {rotate:_nf(0,13)}, false) // %14L6
_m1(8, 0, _n(0,10), _n(0,14)) // %15L6
_a(9, 0, {text:_n(0,5), background:_nf(0,8), image:_nf(0,12), transform:_nf(0,15), borderColor:_n(undefined,54), borderWidth:_nf(3,39), borderStyle:_n(undefined,60), borderRadius:_nf(3,42)}, false) // %16L6
_f(6, 0, internalApply, [_n(undefined,67), _n(0,2)]) // %17L6
_f(7, 0, mul, [_n(0,17), _n(undefined,30)]) // %18L6
_a(8, 0, {point1:_n(1,3), point2:_n(undefined,66), equals:_nt(0,18)}, false) // %19L6
_f(6, 0, internalApply, [_n(undefined,69), _n(0,2)]) // %20L6
_f(7, 0, mul, [_n(0,20), _n(undefined,30)]) // %21L6
_a(8, 0, {point1:_n(1,4), point2:_n(undefined,22), equals:_nt(0,21)}, false) // %22L6
_f(6, 0, internalApply, [_n(undefined,34), _n(0,2)]) // %23L6
_f(7, 0, mul, [_n(0,23), _n(undefined,30)]) // %24L6
_f(6, 0, internalApply, [_n(undefined,31), _n(0,2)]) // %25L6
_f(7, 0, mul, [_n(0,25), _n(undefined,30)]) // %26L6
_cnp({"Block":1})
_ppia(_n(undefined,70))
_ae(6, _n(0,16), {stabilityRowPosition:_n(undefined,63), stabilityColumnPosition:_n(undefined,63), topDrag:_n(undefined,63), leftDrag:_n(undefined,63), temporaryColumnPosition:_n(undefined,63), rightOfEmbeddingLeft:_n(undefined,63), leftOfEmbeddingRight:_n(undefined,63), temporaryRowPosition:_n(undefined,63), insideEmbeddingTop:_n(undefined,63), aboveEmbeddingBottom:_n(undefined,63), initialColumnPosition:_n(0,19), initialRowPosition:_n(0,22), height:_n(0,24), width:_n(0,26)}, undefined, {"0":_n(undefined,62)}) // area template expr 6

_ac(3, "popup", 4, true) // area template create 7
_mq(0, 0, ["message"])
_sp(0, 1) // %0L7
_par(0, 0, ["param"]) // %1L7
_f(5, 0, referredOf, []) // %2L7
_o(6, 0, [_n(0,2), _n(1,12)]) // %3L7
_f(5, 0, me, [])
_sp(0, 1) // %4L7
_a(7, 0, {lower:_n(0,3), higher:_n(0,4)}, false) // %5L7
_f(5, 0, embeddedStar, [])
_sp(0, 1) // %6L7
_neg(6, 0, [_n(undefined,77), _n(undefined,78), _n(0,4), _n(0,6)])
_sp(0, 1) // %7L7
_a(7, 0, {recipient:_n(0,7), type:_n(undefined,79)}, undefined)
_sp(0, 1) // %8L7
_o(8, 0, [_n(0,8), _n(undefined,80)])
_sp(0, 1) // %9L7
_f(9, 0, internalApply, [_n(0,9), _n(undefined,0)])
_sp(0, 1) // %10L7
_f(5, 0, internalApply, [_n(undefined,81), _n(0,0)])
_sp(0, 1) // %11L7
_aeq([[_g(_n(1,2), true)]])
_cnp({"PopUpContext":1,"BlockEvents":2})
_icp(_n(undefined,5))
_eir()
_ppia(_n(undefined,82))
_ae(7, undefined, {horizontal:_n(1,33), vertical:_n(1,35)}, {aboveApp:_n(0,5)}, {"0":_n(undefined,71)}) // area template expr 7
_aw(7, "onClose", _n(0,10), _n(undefined,5), {closePopUp:_tm(_n(1,2), _n(undefined,5), 12)}, undefined, undefined, 11)
_aw(7, "block", _n(0,11), _n(undefined,5), {}, undefined, undefined, 7)
_ac(7, "body", 4, true) // area template create 8
_mq(0, 0, ["message"])
_sp(0, 1) // %0L8
_par(0, 0, ["param"]) // %1L8
_f(5, 0, internalApply, [_n(undefined,36), _n(0,0)])
_sp(0, 1) // %2L8
_cnp({"InitialConfigurationMatrix":1})
_ae(8, undefined, {top:_n(undefined,24), left:_n(undefined,24), bottom:_n(undefined,24), right:_n(undefined,24), height:_n(undefined,84), width:_n(undefined,85)}, undefined, {"0":_n(undefined,83)}) // area template expr 8
_aw(8, "blockMouseDown", _n(0,2), _n(undefined,5), {}, undefined, undefined, 7)
_ac(8, "matrix", 4, true) // area template create 9
_mq(0, 0, ["message"])
_sp(0, 1) // %0L9
_par(0, 0, ["param"])
_sp(0, 1) // %1L9
_f(5, 0, internalApply, [_n(undefined,89), _n(0,0)])
_sp(0, 1) // %2L9
_f(5, 0, internalApply, [_n(undefined,90), _n(0,1)])
_sp(0, 1) // %3L9
_f(5, 0, offset, [_n(undefined,94), _n(undefined,95)])
_se(5, 0) // %4L9
_f(6, 0, minus, [_n(0,4), _n(undefined,96)])
_se(6, 0) // %5L9
_f(7, 0, div, [_n(0,5), _n(undefined,92)])
_se(7, 0) // %6L9
_f(8, 0, plus, [_n(0,6), _n(undefined,30)])
_se(8, 0) // %7L9
_cnp({"FixedMatrix":1})
_acc(9, {"cells":{data:_n(undefined,4),partner:undefined}})
_ae(9, _n(undefined,86), {frame:_n(undefined,88)}, undefined, {"0":_n(undefined,87)}) // area template expr 9
_aw(9, "onClick", _n(0,2), undefined, {closePopUp:_tm(_n(3,2), _n(0,3), 7)}, undefined, undefined, 6)
_ac(9, "cells", 4, true) // area template create 10
_mq(0, 0, ["message"])
_sp(0, 1) // %0L10
_par(0, 0, ["param"])
_sp(0, 1) // %1L10
_f(5, 0, internalApply, [_n(undefined,6), _n(0,1)]) // %2L10
_f(5, 0, internalApply, [_n(undefined,49), _n(0,1)]) // %3L10
_f(6, 0, internalApply, [_n(undefined,41), _n(0,3)]) // %4L10
_q(7, 0, [[_g(_n(0,4), true)]]) // %5L10
_a(7, 0, {image:_nf(0,4), repeat:_nf(undefined,42)}, false) // %6L10
_m1(8, 0, _n(0,5), _n(0,6)) // %7L10
_f(5, 0, internalApply, [_n(undefined,17), _n(0,1)]) // %8L10
_q(6, 0, [[_g(_n(0,8), true)]]) // %9L10
_m1(7, 0, _n(0,9), _n(undefined,18)) // %10L10
_a(9, 0, {background:_nf(0,7), boxShadow:_nf(0,10)}, false) // %11L10
_f(6, 0, internalApply, [_n(undefined,34), _n(0,3)]) // %12L10
_f(7, 0, mul, [_n(0,12), _n(undefined,30)]) // %13L10
_f(6, 0, internalApply, [_n(undefined,31), _n(0,3)]) // %14L10
_f(7, 0, mul, [_n(0,14), _n(undefined,30)]) // %15L10
_f(5, 0, internalApply, [_n(undefined,90), _n(0,1)])
_sp(0, 1) // %16L10
_f(6, 0, div, [_n(0,16), _n(undefined,92)]) // %17L10
_f(7, 0, floor, [_n(0,17)]) // %18L10
_f(8, 0, mul, [_n(0,18), _n(undefined,93)]) // %19L10
_f(9, 0, plus, [_n(0,19), _n(undefined,30)]) // %20L10
_f(6, 0, mod, [_n(0,16), _n(undefined,92)]) // %21L10
_f(9, 0, mul, [_n(0,21), _n(1,7)])
_se(9, 0) // %22L10
_f(10, 0, plus, [_n(0,22), _n(undefined,97)])
_se(10, 0) // %23L10
_f(6, 0, notEqual, [_n(5,2), _n(0,16)])
_sp(0, 1) // %24L10
_f(5, 0, internalApply, [_n(undefined,89), _n(0,0)])
_sp(0, 1) // %25L10
_f(7, 0, and, [_n(0,24), _n(0,25)])
_sp(0, 1) // %26L10
_f(6, 0, internalApply, [_n(undefined,47), _n(0,3)]) // %27L10
_q(7, 0, [[_g(_n(0,27), false)], []]) // %28L10
_q(7, 0, [[_g(_n(0,27), true)], []]) // %29L10
_m(8, 0, _n(0,29), [_n(undefined,50), _n(undefined,51)]) // %30L10
_f(6, 0, internalApply, [_n(undefined,59), _n(0,3)]) // %31L10
_f(7, 0, mul, [_n(0,31), _n(undefined,30)]) // %32L10
_f(8, 0, round, [_n(0,32)]) // %33L10
_f(9, 0, max, [_n(undefined,3), _n(0,33)]) // %34L10
_f(6, 0, internalApply, [_n(undefined,61), _n(0,3)]) // %35L10
_f(7, 0, mul, [_n(0,35), _n(undefined,30)]) // %36L10
_f(8, 0, round, [_n(0,36)]) // %37L10
_f(5, 0, me, []) // %38L10
_a(6, 0, {type:_n(undefined,64), element:_n(0,38), content:_n(undefined,65)}, false) // %39L10
_a(6, 0, {type:_n(undefined,68), element:_n(0,38), content:_n(undefined,65)}, false) // %40L10
_cnp({"HuaRongDaoPreview":1,"HuaRongDaoBase":2,"HighLightOnHover":3,"WriteConfigOnClick":4,"FixedMatrixCell":5})
_acc(10, {"blocks":{data:_n(0,2),partner:undefined}})
_ae(10, _n(0,11), {"content-height":_n(0,13), "content-width":_n(0,15), top:_n(0,20), left:_n(0,23), height:_n(undefined,98), width:_n(1,6)}, undefined, {"0":_n(undefined,91)}) // area template expr 10
_aw(10, "onClick", _n(0,26), _n(undefined,14), {doChangeConfig:_tm(_n(5,2), _n(0,16), 10),reset:_tm(_n(undefined,0), _n(5,43), 10)}, undefined, undefined, 9)
_ac(10, "blocks", 6, true) // area template create 11
_mq(0, 0, ["message"]) // %0L11
_par(0, 0, ["param"]) // %1L11
_f(7, 0, internalApply, [_n(undefined,49), _n(0,1)]) // %2L11
_f(8, 0, internalApply, [_n(undefined,48), _n(0,2)]) // %3L11
_m(9, 0, _n(1,28), [_n(undefined,9), _n(0,3)]) // %4L11
_a(10, 0, {value:_nf(0,4), fontSize:_nf(1,30), fontFamily:_n(undefined,52), fontVariant:_n(undefined,53), color:_n(undefined,54)}, false) // %5L11
_f(8, 0, internalApply, [_n(undefined,55), _n(0,2)]) // %6L11
_q(9, 0, [[_g(_n(0,6), true)]]) // %7L11
_m1(10, 0, _n(0,7), _n(0,6)) // %8L11
_f(8, 0, internalApply, [_n(undefined,56), _n(0,2)]) // %9L11
_q(9, 0, [[_g(_n(0,9), true)]]) // %10L11
_a(9, 0, {src:_nf(0,9), size:_nf(undefined,57)}, false) // %11L11
_m1(10, 0, _n(0,10), _n(0,11)) // %12L11
_f(8, 0, internalApply, [_n(undefined,58), _n(0,2)]) // %13L11
_a(9, 0, {rotate:_nf(0,13)}, false) // %14L11
_m1(10, 0, _n(0,10), _n(0,14)) // %15L11
_a(11, 0, {text:_n(0,5), background:_nf(0,8), image:_nf(0,12), transform:_nf(0,15), borderColor:_n(undefined,54), borderWidth:_nf(1,34), borderStyle:_n(undefined,60), borderRadius:_nf(1,37)}, false) // %16L11
_f(8, 0, internalApply, [_n(undefined,67), _n(0,2)]) // %17L11
_f(9, 0, mul, [_n(0,17), _n(undefined,30)]) // %18L11
_a(10, 0, {point1:_n(1,39), point2:_n(undefined,66), equals:_nt(0,18)}, false) // %19L11
_f(8, 0, internalApply, [_n(undefined,69), _n(0,2)]) // %20L11
_f(9, 0, mul, [_n(0,20), _n(undefined,30)]) // %21L11
_a(10, 0, {point1:_n(1,40), point2:_n(undefined,22), equals:_nt(0,21)}, false) // %22L11
_f(8, 0, internalApply, [_n(undefined,34), _n(0,2)]) // %23L11
_f(9, 0, mul, [_n(0,23), _n(undefined,30)]) // %24L11
_f(8, 0, internalApply, [_n(undefined,31), _n(0,2)]) // %25L11
_f(9, 0, mul, [_n(0,25), _n(undefined,30)]) // %26L11
_cnp({"Block":1})
_ppia(_n(undefined,70))
_ae(11, _n(0,16), {stabilityRowPosition:_n(undefined,63), stabilityColumnPosition:_n(undefined,63), topDrag:_n(undefined,63), leftDrag:_n(undefined,63), temporaryColumnPosition:_n(undefined,63), rightOfEmbeddingLeft:_n(undefined,63), leftOfEmbeddingRight:_n(undefined,63), temporaryRowPosition:_n(undefined,63), insideEmbeddingTop:_n(undefined,63), aboveEmbeddingBottom:_n(undefined,63), initialColumnPosition:_n(0,19), initialRowPosition:_n(0,22), height:_n(0,24), width:_n(0,26)}, undefined, {"0":_n(undefined,62)}) // area template expr 11

_ac(2, "goal", 0, true) // area template create 12
_mq(0, 0, ["message"]) // %0L12
_par(0, 0, ["param"]) // %1L12
_f(1, 0, me, []) // %2L12
_d(2, 0, "label", _n(0,2)) // %3L12
_p(3, 0, 1, _n(0,3)) // %4L12
_f(5, 0, max, [_n(1,20), _n(0,4)]) // %5L12
_f(6, 0, plus, [_n(0,5), _n(undefined,8)]) // %6L12
_a(3, 0, {type:_n(undefined,44), element:_n(0,3)}, false) // %7L12
_a(4, 0, {point1:_n(0,7), point2:_n(undefined,22), equals:_nt(undefined,24)}, false) // %8L12
_a(3, 0, {type:_n(undefined,46), element:_n(0,3)}, false) // %9L12
_a(4, 0, {point1:_n(undefined,45), point2:_n(0,9), equals:_nt(undefined,24)}, false) // %10L12
_cnp({"HuaRongDaoWithLabel":1})
_ae(12, undefined, {top:_n(1,46), horizontalCenter:_n(1,48), width:_n(0,6), height:_n(1,49)}, undefined, {"0":_n(undefined,100)}) // area template expr 12
_ac(12, "label", 0, true) // area template create 13
_mq(0, 0, ["message"]) // %0L13
_par(0, 0, ["param"]) // %1L13
_f(1, 0, displayWidth, [_n(undefined,101), _n(undefined,9)]) // %2L13
_cnp({"TextLabel":1})
_ae(13, _n(undefined,101), {top:_n(undefined,16), left:_n(undefined,16), right:_n(undefined,16), width:_n(undefined,9), height:_n(undefined,40)}, undefined, {"0":_n(undefined,39), "1":_n(0,2)}) // area template expr 13
_ac(12, "configuration", 0, true) // area template create 14
_mq(0, 0, ["message"]) // %0L14
_par(0, 0, ["param"]) // %1L14
_f(1, 0, me, []) // %2L14
_a(2, 0, {type:_n(undefined,64), element:_n(0,2), content:_n(undefined,65)}, false) // %3L14
_a(2, 0, {type:_n(undefined,68), element:_n(0,2), content:_n(undefined,65)}, false) // %4L14
_cnp({"HuaRongDaoPreview":1,"HuaRongDaoBase":2})
_acc(14, {"blocks":{data:_n(2,6),partner:undefined}})
_ae(14, _n(2,51), {top:_n(1,8), horizontalCenter:_n(1,10), "content-height":_n(2,30), "content-width":_n(2,31)}, undefined, {"0":_n(undefined,43)}) // area template expr 14
_ac(14, "blocks", 4, true) // area template create 15
_mq(0, 0, ["message"]) // %0L15
_par(0, 0, ["param"]) // %1L15
_f(5, 0, internalApply, [_n(undefined,49), _n(0,1)]) // %2L15
_f(6, 0, internalApply, [_n(undefined,48), _n(0,2)]) // %3L15
_m(7, 0, _n(3,52), [_n(undefined,9), _n(0,3)]) // %4L15
_a(8, 0, {value:_nf(0,4), fontSize:_nf(3,54), fontFamily:_n(undefined,52), fontVariant:_n(undefined,53), color:_n(undefined,54)}, false) // %5L15
_f(6, 0, internalApply, [_n(undefined,55), _n(0,2)]) // %6L15
_q(7, 0, [[_g(_n(0,6), true)]]) // %7L15
_m1(8, 0, _n(0,7), _n(0,6)) // %8L15
_f(6, 0, internalApply, [_n(undefined,56), _n(0,2)]) // %9L15
_q(7, 0, [[_g(_n(0,9), true)]]) // %10L15
_a(7, 0, {src:_nf(0,9), size:_nf(undefined,57)}, false) // %11L15
_m1(8, 0, _n(0,10), _n(0,11)) // %12L15
_f(6, 0, internalApply, [_n(undefined,58), _n(0,2)]) // %13L15
_a(7, 0, {rotate:_nf(0,13)}, false) // %14L15
_m1(8, 0, _n(0,10), _n(0,14)) // %15L15
_a(9, 0, {text:_n(0,5), background:_nf(0,8), image:_nf(0,12), transform:_nf(0,15), borderColor:_n(undefined,54), borderWidth:_nf(3,39), borderStyle:_n(undefined,60), borderRadius:_nf(3,42)}, false) // %16L15
_f(6, 0, internalApply, [_n(undefined,67), _n(0,2)]) // %17L15
_f(7, 0, mul, [_n(0,17), _n(undefined,30)]) // %18L15
_a(8, 0, {point1:_n(1,3), point2:_n(undefined,66), equals:_nt(0,18)}, false) // %19L15
_f(6, 0, internalApply, [_n(undefined,69), _n(0,2)]) // %20L15
_f(7, 0, mul, [_n(0,20), _n(undefined,30)]) // %21L15
_a(8, 0, {point1:_n(1,4), point2:_n(undefined,22), equals:_nt(0,21)}, false) // %22L15
_f(6, 0, internalApply, [_n(undefined,34), _n(0,2)]) // %23L15
_f(7, 0, mul, [_n(0,23), _n(undefined,30)]) // %24L15
_f(6, 0, internalApply, [_n(undefined,31), _n(0,2)]) // %25L15
_f(7, 0, mul, [_n(0,25), _n(undefined,30)]) // %26L15
_cnp({"Block":1})
_ppia(_n(undefined,70))
_ae(15, _n(0,16), {stabilityRowPosition:_n(undefined,63), stabilityColumnPosition:_n(undefined,63), topDrag:_n(undefined,63), leftDrag:_n(undefined,63), temporaryColumnPosition:_n(undefined,63), rightOfEmbeddingLeft:_n(undefined,63), leftOfEmbeddingRight:_n(undefined,63), temporaryRowPosition:_n(undefined,63), insideEmbeddingTop:_n(undefined,63), aboveEmbeddingBottom:_n(undefined,63), initialColumnPosition:_n(0,19), initialRowPosition:_n(0,22), height:_n(0,24), width:_n(0,26)}, undefined, {"0":_n(undefined,62)}) // area template expr 15

_ac(2, "game", 0, true) // area template create 16
_mq(0, 0, ["message"])
_sp(0, 1) // %0L16
_par(0, 0, ["param"]) // %1L16
_f(1, 0, me, [])
_sp(0, 1) // %2L16
_d(5, 0, "blocks", _n(0,2))
_sp(0, 1) // %3L16
_f(1, 0, internalApply, [_n(undefined,107), _n(0,0)])
_sp(0, 1) // %4L16
_p(6, 0, 2, _n(0,3))
_sp(0, 1) // %5L16<W>
_p(6, 0, 3, _n(0,3))
_sp(0, 1) // %6L16<W>
_p(6, 0, 4, _n(0,3))
_sp(0, 1) // %7L16<W>
_p(6, 0, 5, _n(0,3))
_sp(0, 1) // %8L16
_f(7, 0, bool, [_n(0,8)]) // %9L16
_q(8, 0, [[_g(_n(0,9), false)]]) // %10L16
_m1(9, 0, _n(0,10), _n(undefined,108)) // %11L16
_a(2, 0, {type:_nf(undefined,68), element:_n(0,2)}, false) // %12L16
_a(2, 0, {type:_nf(undefined,64), element:_n(0,2)}, false) // %13L16
_a(2, 0, {type:_nf(undefined,64), element:_n(0,2), content:_nf(undefined,65)}, false) // %14L16
_a(3, 0, {point1:_nf(0,14), point2:_nf(undefined,66), min:_nt(undefined,16)}, false) // %15L16
_a(2, 0, {type:_nf(undefined,121), element:_n(0,2), content:_nf(undefined,65)}, false) // %16L16
_a(3, 0, {point1:_nf(undefined,25), point2:_nf(0,16), min:_nt(undefined,16)}, false) // %17L16
_a(2, 0, {type:_nf(undefined,68), element:_n(0,2), content:_nf(undefined,65)}, false) // %18L16
_a(3, 0, {point1:_nf(0,18), point2:_nf(undefined,22), min:_nt(undefined,16)}, false) // %19L16
_a(2, 0, {type:_nf(undefined,124), element:_n(0,2), content:_nf(undefined,65)}, false) // %20L16
_a(3, 0, {point1:_nf(undefined,123), point2:_nf(0,20), min:_nt(undefined,16)}, false) // %21L16
_a(2, 0, {msg:_n(undefined,125), recipient:_n(0,2)}, undefined)
_sp(0, 1) // %22L16
_f(3, 0, internalApply, [_n(0,22), _n(undefined,0)])
_sp(0, 1) // %23L16
_a(2, 0, {content:_n(undefined,14), element:_n(0,2), type:_n(undefined,126)}, undefined)
_sp(0, 1) // %24L16
_a(2, 0, {content:_n(undefined,14), element:_n(0,2), type:_n(undefined,127)}, undefined)
_sp(0, 1) // %25L16
_a(2, 0, {msg:_n(undefined,130), recipient:_n(0,2)}, undefined)
_sp(0, 1) // %26L16
_f(3, 0, internalApply, [_n(0,26), _n(undefined,0)])
_sp(0, 1) // %27L16
_cnp({"HuaRongDao":1,"HuaRongDaoBase":2})
_acc(16, {"blocks":{data:_n(1,4),partner:undefined}})
_ae(16, _n(1,57), {"horizontal-center":_n(undefined,16), "vertical-center":_n(undefined,16), "content-height":_n(1,61), "content-width":_n(1,62)}, undefined, {"0":_n(undefined,104), "15":_n(1,60)}) // area template expr 16
_aw(16, "onResetMsg", _n(0,4), undefined, {setAllBlocksInitialPosition:_tm(_n(0,5), _n(undefined,14), 7),clearAllHistory:_tm(_n(0,6), _n(undefined,9), 7),clearRedo:_tm(_n(0,7), _n(undefined,9), 7)}, undefined, undefined, 2)
_ac(16, "blocks", 4, true) // area template create 17
_mq(0, 0, ["message"])
_sp(0, 1) // %0L17
_par(0, 0, ["param"])
_sp(0, 1) // %1L17
_f(5, 0, me, []) // %2L17
_f(6, 0, nextPlus, [_n(1,3), _n(0,2)]) // %3L17
_w(5, 0, ["context","positionHistory"], _n(undefined,9),false)
_sp(0, 1) // %4L17<W>
_w(5, 0, ["context","initialPosition"], _n(undefined,14),false)
_sp(0, 1) // %5L17<W>
_w(5, 0, ["context","positionRedo"], _n(undefined,9),false)
_sp(0, 1) // %6L17<W>
_f(5, 0, internalApply, [_n(undefined,49), _n(0,1)])
_sp(0, 1) // %7L17
_f(6, 0, internalApply, [_n(undefined,55), _n(0,7)]) // %8L17
_q(7, 0, [[_g(_n(0,8), true)]]) // %9L17
_m1(8, 0, _n(0,9), _n(0,8)) // %10L17
_f(6, 0, internalApply, [_n(undefined,56), _n(0,7)]) // %11L17
_q(7, 0, [[_g(_n(0,11), true)]]) // %12L17
_a(7, 0, {src:_nf(0,11), size:_nf(undefined,57)}, false) // %13L17
_m1(8, 0, _n(0,12), _n(0,13)) // %14L17
_f(6, 0, internalApply, [_n(undefined,58), _n(0,7)]) // %15L17
_a(7, 0, {rotate:_nf(0,15)}, false) // %16L17
_m1(8, 0, _n(0,12), _n(0,16)) // %17L17
_w(5, 0, ["context","selected"], _n(undefined,5),true)
_sp(0, 1) // %18L17<W>
_f(6, 0, internalApply, [_n(undefined,48), _n(0,7)]) // %19L17
_a(7, 0, {fontFamily:_n(undefined,52), fontSize:_n(undefined,109), fontVariant:_n(undefined,53), color:_n(undefined,54), value:_nf(0,19)}, false) // %20L17
_a(10, 0, {background:_nf(0,10), image:_nf(0,14), transform:_nf(0,17), transitions:_nf(1,11), borderColor:_n(undefined,54), borderWidth:_nf(2,65), borderStyle:_n(undefined,60), borderRadius:_nf(2,67), text:_n(0,20)}, false) // %21L17
_f(6, 0, internalApply, [_n(undefined,34), _n(0,7)]) // %22L17
_f(6, 0, internalApply, [_n(undefined,31), _n(0,7)]) // %23L17
_f(6, 0, internalApply, [_n(undefined,111), _n(0,7)])
_sp(0, 1) // %24L17
_f(7, 0, notEqual, [_n(0,24), _n(undefined,112)])
_sp(0, 1) // %25L17
_w(5, 0, ["context","temporaryPosition"], _n(undefined,5),false)
_sp(0, 1) // %26L17<W>
_q(8, 0, [[_g(_n(0,18), true), _g(_n(0,5), false)], [_g(_n(0,25), true), _g(_n(0,5), false), _g(_n(0,26), false)]]) // %27L17
_m(9, 0, _n(0,27), [_n(undefined,113), _n(undefined,114)]) // %28L17
_q(8, 0, [[_g(_n(0,25), true), _g(_n(0,5), false), _g(_n(0,26), false)]]) // %29L17
_m1(9, 0, _n(0,29), _n(1,12)) // %30L17
_m1(9, 0, _n(0,29), _n(undefined,22)) // %31L17
_m1(9, 0, _n(0,29), _n(undefined,115)) // %32L17
_a(10, 0, {priority:_nt(0,28), point1:_nf(0,30), point2:_nf(0,31), stability:_nt(0,32)}, false) // %33L17
_f(7, 0, notEqual, [_n(0,24), _n(undefined,116)])
_sp(0, 1) // %34L17
_q(8, 0, [[_g(_n(0,18), true), _g(_n(0,5), false)], [_g(_n(0,34), true), _g(_n(0,5), false), _g(_n(0,26), false)]]) // %35L17
_m(9, 0, _n(0,35), [_n(undefined,113), _n(undefined,114)]) // %36L17
_q(8, 0, [[_g(_n(0,34), true), _g(_n(0,5), false), _g(_n(0,26), false)]]) // %37L17
_m1(9, 0, _n(0,37), _n(1,13)) // %38L17
_m1(9, 0, _n(0,37), _n(undefined,66)) // %39L17
_m1(9, 0, _n(0,37), _n(undefined,115)) // %40L17
_a(10, 0, {priority:_nt(0,36), point1:_nf(0,38), point2:_nf(0,39), stability:_nt(0,40)}, false) // %41L17
_q(8, 0, [[_g(_n(0,18), true), _g(_n(0,25), true)]]) // %42L17
_w(5, 0, ["context","mouseDownY"], _n(undefined,8),true)
_sp(0, 1) // %43L17<W>
_a(6, 0, {point1:_nf(undefined,10), point2:_nf(undefined,117), equals:_nt(0,43), priority:_nt(undefined,118)}, false) // %44L17
_m1(9, 0, _n(0,42), _n(0,44)) // %45L17
_q(8, 0, [[_g(_n(0,18), true), _g(_n(0,34), true)]]) // %46L17
_w(5, 0, ["context","mouseDownX"], _n(undefined,8),true)
_sp(0, 1) // %47L17<W>
_a(6, 0, {point1:_nf(undefined,73), point2:_nf(undefined,119), equals:_nt(0,47), priority:_nt(undefined,118)}, false) // %48L17
_m1(9, 0, _n(0,46), _n(0,48)) // %49L17
_q(8, 0, [[_g(_n(0,34), true), _g(_n(0,26), true)]]) // %50L17
_f(6, 0, internalApply, [_n(undefined,120), _n(0,26)]) // %51L17
_a(7, 0, {point1:_nf(1,14), point2:_nf(undefined,66), equals:_nt(0,51)}, false) // %52L17
_m1(9, 0, _n(0,50), _n(0,52)) // %53L17
_q(8, 0, [[_g(_n(0,34), true)]]) // %54L17
_m1(9, 0, _n(0,54), _n(1,15)) // %55L17
_m1(9, 0, _n(0,54), _n(1,17)) // %56L17
_q(8, 0, [[_g(_n(0,25), true), _g(_n(0,26), true)]]) // %57L17
_f(6, 0, internalApply, [_n(undefined,122), _n(0,26)]) // %58L17
_a(7, 0, {point1:_nf(1,18), point2:_nf(undefined,22), equals:_nt(0,58)}, false) // %59L17
_m1(9, 0, _n(0,57), _n(0,59)) // %60L17
_q(8, 0, [[_g(_n(0,25), true)]]) // %61L17
_m1(9, 0, _n(0,61), _n(1,19)) // %62L17
_m1(9, 0, _n(0,61), _n(1,21)) // %63L17
_f(8, 0, not, [_n(0,34)]) // %64L17
_f(9, 0, or, [_n(0,5), _n(0,64)]) // %65L17
_q(10, 0, [[_g(_n(0,65), true)]]) // %66L17
_f(6, 0, internalApply, [_n(undefined,67), _n(0,7)]) // %67L17
_f(7, 0, mul, [_n(0,67), _n(2,60)]) // %68L17
_a(8, 0, {point1:_nf(1,14), point2:_nf(undefined,66), equals:_nt(0,68)}, false) // %69L17
_m1(11, 0, _n(0,66), _n(0,69)) // %70L17
_f(8, 0, not, [_n(0,25)]) // %71L17
_f(9, 0, or, [_n(0,5), _n(0,71)]) // %72L17
_q(10, 0, [[_g(_n(0,72), true)]]) // %73L17
_f(6, 0, internalApply, [_n(undefined,69), _n(0,7)]) // %74L17
_f(7, 0, mul, [_n(0,74), _n(2,60)]) // %75L17
_a(8, 0, {point1:_nf(1,18), point2:_nf(undefined,22), equals:_nt(0,75)}, false) // %76L17
_m1(11, 0, _n(0,73), _n(0,76)) // %77L17
_f(7, 0, mul, [_n(0,22), _n(2,60)]) // %78L17
_f(7, 0, mul, [_n(0,23), _n(2,60)]) // %79L17
_f(6, 0, last, [_n(0,4)])
_sp(0, 1) // %80L17
_f(5, 0, offset, [_n(1,24), _n(undefined,10)])
_sp(0, 1)
_se(5, 0) // %81L17
_f(5, 0, offset, [_n(1,25), _n(undefined,73)])
_sp(0, 1)
_se(5, 0) // %82L17
_a(6, 0, {top:_n(0,81), left:_n(0,82)}, undefined)
_sp(0, 1)
_se(6, 0) // %83L17
_f(7, 0, internalPush, [_n(0,83)])
_sp(0, 1)
_se(7, 0) // %84L17
_f(6, 0, pos, [_n(undefined,129), _n(0,4)])
_sp(0, 1) // %85L17
_f(6, 0, last, [_n(0,6)])
_sp(0, 1) // %86L17
_f(6, 0, pos, [_n(undefined,129), _n(0,6)])
_sp(0, 1) // %87L17
_f(6, 0, div, [_n(0,81), _n(2,60)])
_sp(0, 1)
_se(6, 0) // %88L17
_f(7, 0, round, [_n(0,88)])
_sp(0, 1)
_se(7, 0) // %89L17
_f(8, 0, mul, [_n(0,89), _n(2,60)])
_sp(0, 1)
_se(8, 0) // %90L17
_f(6, 0, div, [_n(0,82), _n(2,60)])
_sp(0, 1)
_se(6, 0) // %91L17
_f(7, 0, round, [_n(0,91)])
_sp(0, 1)
_se(7, 0) // %92L17
_f(8, 0, mul, [_n(0,92), _n(2,60)])
_sp(0, 1)
_se(8, 0) // %93L17
_a(9, 0, {top:_n(0,90), left:_n(0,93)}, undefined)
_sp(0, 1)
_se(9, 0) // %94L17
_q(8, 0, [[_g(_n(0,18), false), _g(_n(0,25), true)], [_g(_n(0,18), false), _g(_n(0,34), true)]])
_sp(0, 1) // %95L17
_f(5, 0, internalApply, [_n(undefined,36), _n(0,0)])
_sp(0, 1) // %96L17
_m1(9, 0, _n(0,95), _n(0,96))
_sp(0, 1) // %97L17
_q(8, 0, [[_g(_n(0,18), false), _g(_n(0,25), true)]])
_sp(0, 1) // %98L17
_m1(9, 0, _n(0,98), _n(0,43))
_sp(0, 1) // %99L17<W>
_f(5, 0, offset, [_n(undefined,10), _n(undefined,131)])
_sp(0, 1)
_se(5, 0) // %100L17
_m1(9, 0, _n(0,98), _n(0,100))
_sp(0, 1)
_se(9, 0) // %101L17
_q(8, 0, [[_g(_n(0,18), false), _g(_n(0,34), true)]])
_sp(0, 1) // %102L17
_m1(9, 0, _n(0,102), _n(0,47))
_sp(0, 1) // %103L17<W>
_f(5, 0, offset, [_n(undefined,73), _n(undefined,132)])
_sp(0, 1)
_se(5, 0) // %104L17
_m1(9, 0, _n(0,102), _n(0,104))
_sp(0, 1)
_se(9, 0) // %105L17
_q(6, 0, [[_g(_n(0,18), false)]])
_sp(0, 1) // %106L17
_m1(7, 0, _n(0,106), _n(0,96))
_sp(0, 1) // %107L17
_m1(7, 0, _n(0,106), _n(0,18))
_sp(0, 1) // %108L17<W>
_m1(7, 0, _n(0,106), _n(undefined,14))
_sp(0, 1) // %109L17
_q(6, 0, [[_g(_n(0,18), true)]])
_sp(0, 1) // %110L17
_m1(7, 0, _n(0,110), _n(undefined,38))
_sp(0, 1) // %111L17
_m1(7, 0, _n(0,110), _n(0,18))
_sp(0, 1) // %112L17<W>
_m1(7, 0, _n(0,110), _n(undefined,5))
_sp(0, 1) // %113L17
_a(6, 0, {type:_n(undefined,44), element:_n(0,2)}, false) // %114L17
_a(6, 0, {type:_n(undefined,21), element:_n(0,2)}, false) // %115L17
_a(6, 0, {type:_n(undefined,135), element:_n(0,2)}, false) // %116L17
_a(6, 0, {type:_n(undefined,26), element:_n(0,2)}, false) // %117L17
_cnp({"Block":1,"Draggable":2,"Clickable":3,"StorePositionInHistory":4})
_acc(17, {"positioningConstraintGenerators":{data:_n(0,3),partner:undefined}})
_ae(17, _n(0,21), {stabilityRowPosition:_n(0,33), stabilityColumnPosition:_n(0,41), topDrag:_n(0,45), leftDrag:_n(0,49), temporaryColumnPosition:_n(0,53), rightOfEmbeddingLeft:_n(0,55), leftOfEmbeddingRight:_n(0,56), temporaryRowPosition:_n(0,60), insideEmbeddingTop:_n(0,62), aboveEmbeddingBottom:_n(0,63), initialColumnPosition:_n(0,70), initialRowPosition:_n(0,77), height:_n(0,78), width:_n(0,79)}, undefined, {"0":_n(undefined,110), "2":_n(0,5), "3":_n(0,4), "4":_n(0,6), "5":_n(0,18), "10":_n(0,19), "11":_n(undefined,9), "12":_n(0,8), "13":_n(0,11), "14":_n(0,15), "16":_n(0,22), "17":_n(0,23)}) // area template expr 17
_aw(17, "onInitialPosition", _n(0,5), undefined, {doSomething:_tm(_n(0,5), _n(undefined,5), 7)}, undefined, undefined, 6)
_aw(17, "onTemporaryPosition", _n(0,26), undefined, {doSomething:_tm(_n(0,26), _n(undefined,5), 7)}, undefined, undefined, 6)
_aw(17, "onUndo", _n(1,23), undefined, {writePreviousPosition:_tm(_n(0,26), _n(0,80), 7),storeRedo:_tm(_n(0,6), _n(0,84), 8),popPositionHistory:_tm(_n(0,4), _n(0,85), 7)}, undefined, undefined, 4)
_aw(17, "onRedo", _n(1,27), undefined, {writeRedoPosition:_tm(_n(0,26), _n(0,86), 7),storeUndo:_tm(_n(0,4), _n(0,84), 8),popPositionRedo:_tm(_n(0,6), _n(0,87), 7)}, undefined, undefined, 4)
_aw(17, "onMouseUp", _n(undefined,38), undefined, {enableTempPos:_tm(_n(0,26), _n(0,94), 10)}, undefined, undefined, 2)
_aw(17, "onDraggableMouseDown", _n(0,97), undefined, {writeY:_tm(_n(0,99), _n(0,101), 11),writeX:_tm(_n(0,103), _n(0,105), 11)}, undefined, undefined, 10)
_aw(17, "onClickableMouseDown", _n(0,107), undefined, {selected:_tm(_n(0,108), _n(0,109), 9)}, undefined, undefined, 8)
_aw(17, "onClickableMouseUp", _n(0,111), undefined, {selected:_tm(_n(0,112), _n(0,113), 9)}, undefined, undefined, 8)
_aw(17, "onStorePositionInHistory", _n(1,8), undefined, {storePosition:_tm(_n(0,4), _n(0,84), 8),clearRedo:_tm(_n(0,6), _n(undefined,9), 8)}, undefined, undefined, 7)
_ac(17, "positioningConstraintGenerators", 7, true) // area template create 18
_mq(0, 0, ["message"]) // %0L18
_par(0, 0, ["param"]) // %1L18
_f(8, 0, internalApply, [_n(undefined,49), _n(0,1)]) // %2L18
_a(9, 0, {type:_n(undefined,21), element:_n(0,2)}, false) // %3L18
_f(8, 0, me, []) // %4L18
_a(9, 0, {label:_n(undefined,133), element:_n(0,4)}, false) // %5L18
_a(10, 0, {point1:_n(1,114), point2:_n(0,3), min:_n(undefined,16), orGroups:_n(0,5), priority:_n(undefined,134)}, false) // %6L18
_a(9, 0, {type:_n(undefined,44), element:_n(0,2)}, false) // %7L18
_a(10, 0, {point1:_n(0,7), point2:_n(1,115), min:_n(undefined,16), orGroups:_n(0,5), priority:_n(undefined,134)}, false) // %8L18
_a(9, 0, {type:_n(undefined,26), element:_n(0,2)}, false) // %9L18
_a(10, 0, {point1:_n(1,116), point2:_n(0,9), min:_n(undefined,16), orGroups:_n(0,5), priority:_n(undefined,134)}, false) // %10L18
_a(9, 0, {type:_n(undefined,135), element:_n(0,2)}, false) // %11L18
_a(10, 0, {point1:_n(0,11), point2:_n(1,117), min:_n(undefined,16), orGroups:_n(0,5), priority:_n(undefined,134)}, false) // %12L18
_cnp(undefined)
_ae(18, undefined, {orAboveSiblings:_n(0,6), orBelowSiblings:_n(0,8), orLeftOfSiblings:_n(0,10), orRightSiblings:_n(0,12)}, undefined, undefined) // area template expr 18
_ac(2, "resetButton", 0, true) // area template create 19
_mq(0, 0, ["message"])
_sp(0, 1) // %0L19
_par(0, 0, ["param"]) // %1L19
_w(1, 0, ["context","selected"], _n(undefined,5),true)
_sp(0, 1) // %2L19<W>
_q(2, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %3L19
_m1(3, 0, _n(0,3), _n(undefined,19)) // %4L19
_q(2, 0, [[_g(_n(0,2), true)], []]) // %5L19
_m(3, 0, _n(0,5), [_n(undefined,136), _n(undefined,137)]) // %6L19
_f(1, 0, internalApply, [_n(undefined,17), _n(0,1)]) // %7L19
_co(2, 0, _n(0,7), [{on:_n(undefined,14), use:_n(undefined,138)}]) // %8L19
_a(4, 0, {fontSize:_nf(0,6), textDecoration:_nf(0,8), color:_n(undefined,139), fontFamily:_n(undefined,140), fontWeight:_n(undefined,98), value:_n(undefined,141)}, false) // %9L19
_a(5, 0, {paddingLeft:_nf(0,4), paddingTop:_nf(0,4), text:_n(0,9)}, false) // %10L19
_f(6, 0, displayWidth, [_n(0,10), _n(undefined,9)]) // %11L19
_f(7, 0, plus, [_n(0,11), _n(undefined,30)]) // %12L19
_f(1, 0, internalApply, [_n(undefined,35), _n(0,0)])
_sp(0, 1) // %13L19
_q(2, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %14L19
_f(1, 0, internalApply, [_n(undefined,36), _n(0,0)])
_sp(0, 1) // %15L19
_m1(3, 0, _n(0,14), _n(0,15))
_sp(0, 1) // %16L19
_m1(3, 0, _n(0,14), _n(0,2))
_sp(0, 1) // %17L19<W>
_m1(3, 0, _n(0,14), _n(undefined,14))
_sp(0, 1) // %18L19
_m1(3, 0, _n(0,3), _n(undefined,38))
_sp(0, 1) // %19L19
_m1(3, 0, _n(0,3), _n(0,2))
_sp(0, 1) // %20L19<W>
_m1(3, 0, _n(0,3), _n(undefined,5))
_sp(0, 1) // %21L19
_cnp({"TextButton":1,"Clickable":2,"TextLabel":3})
_ae(19, _n(0,10), {top:_n(1,69), left:_n(1,70), width:_n(0,12), height:_n(undefined,40)}, undefined, {"0":_n(undefined,142)}) // area template expr 19
_aw(19, "onClick", _n(0,13), undefined, {sendResetMessage:_tm(_n(undefined,0), _n(1,43), 4)}, undefined, undefined, 2)
_aw(19, "onClickableMouseDown", _n(0,16), undefined, {selected:_tm(_n(0,17), _n(0,18), 5)}, undefined, undefined, 4)
_aw(19, "onClickableMouseUp", _n(0,19), undefined, {selected:_tm(_n(0,20), _n(0,21), 5)}, undefined, undefined, 4)
_ac(2, "undoButton", 0, true) // area template create 20
_mq(0, 0, ["message"])
_sp(0, 1) // %0L20
_par(0, 0, ["param"]) // %1L20
_w(1, 0, ["context","selected"], _n(undefined,5),true)
_sp(0, 1) // %2L20<W>
_m1(9, 0, _n(1,73), _n(0,2))
_sp(0, 1) // %3L20<W>
_q(10, 0, [[_g(_n(0,3), true)]]) // %4L20
_m1(11, 0, _n(0,4), _n(undefined,19)) // %5L20
_q(10, 0, [[_g(_n(0,3), true)], []]) // %6L20
_m(11, 0, _n(0,6), [_n(undefined,136), _n(undefined,137)]) // %7L20
_f(1, 0, internalApply, [_n(undefined,17), _n(0,1)]) // %8L20
_co(2, 0, _n(0,8), [{on:_n(undefined,14), use:_n(undefined,138)}]) // %9L20
_m1(9, 0, _n(1,73), _n(0,9)) // %10L20
_a(12, 0, {fontSize:_nf(0,7), textDecoration:_nf(0,10), color:_nf(1,75), fontFamily:_n(undefined,140), fontWeight:_n(undefined,98), value:_n(undefined,148)}, false) // %11L20
_a(13, 0, {paddingLeft:_nf(0,5), paddingTop:_nf(0,5), text:_n(0,11)}, false) // %12L20
_f(14, 0, displayWidth, [_n(0,12), _n(undefined,9)]) // %13L20
_f(15, 0, plus, [_n(0,13), _n(undefined,30)]) // %14L20
_f(1, 0, internalApply, [_n(undefined,35), _n(0,0)])
_sp(0, 1) // %15L20
_m1(9, 0, _n(1,73), _n(0,15))
_sp(0, 1) // %16L20
_q(10, 0, [[_g(_n(1,72), true), _g(_n(0,3), false)]])
_sp(0, 1) // %17L20
_f(1, 0, internalApply, [_n(undefined,36), _n(0,0)])
_sp(0, 1) // %18L20
_m1(11, 0, _n(0,17), _n(0,18))
_sp(0, 1) // %19L20
_m1(11, 0, _n(0,17), _n(0,3))
_sp(0, 1) // %20L20<W>
_m1(11, 0, _n(0,17), _n(undefined,14))
_sp(0, 1) // %21L20
_q(10, 0, [[_g(_n(1,72), true), _g(_n(0,3), true)]])
_sp(0, 1) // %22L20
_m1(11, 0, _n(0,22), _n(undefined,38))
_sp(0, 1) // %23L20
_m1(11, 0, _n(0,22), _n(0,3))
_sp(0, 1) // %24L20<W>
_m1(11, 0, _n(0,22), _n(undefined,5))
_sp(0, 1) // %25L20
_cnp({"TextButton":1,"Clickable":2,"TextLabel":3})
_ae(20, _n(0,12), {top:_n(1,69), horizontalCenter:_n(1,79), width:_n(0,14), height:_n(undefined,40)}, undefined, {"0":_n(1,77)}) // area template expr 20
_aw(20, "onClick", _n(0,16), undefined, {sendUndoMessage:_tm(_n(1,80), _n(1,82), 11)}, undefined, undefined, 10)
_aw(20, "onClickableMouseDown", _n(0,19), undefined, {selected:_tm(_n(0,20), _n(0,21), 13)}, undefined, undefined, 12)
_aw(20, "onClickableMouseUp", _n(0,23), undefined, {selected:_tm(_n(0,24), _n(0,25), 13)}, undefined, undefined, 12)
_ac(2, "redoButton", 0, true) // area template create 21
_mq(0, 0, ["message"])
_sp(0, 1) // %0L21
_par(0, 0, ["param"]) // %1L21
_w(1, 0, ["context","selected"], _n(undefined,5),true)
_sp(0, 1) // %2L21<W>
_m1(9, 0, _n(1,85), _n(0,2))
_sp(0, 1) // %3L21<W>
_q(10, 0, [[_g(_n(0,3), true)]]) // %4L21
_m1(11, 0, _n(0,4), _n(undefined,19)) // %5L21
_q(10, 0, [[_g(_n(0,3), true)], []]) // %6L21
_m(11, 0, _n(0,6), [_n(undefined,136), _n(undefined,137)]) // %7L21
_f(1, 0, internalApply, [_n(undefined,17), _n(0,1)]) // %8L21
_co(2, 0, _n(0,8), [{on:_n(undefined,14), use:_n(undefined,138)}]) // %9L21
_m1(9, 0, _n(1,85), _n(0,9)) // %10L21
_a(12, 0, {fontSize:_nf(0,7), textDecoration:_nf(0,10), color:_nf(1,87), fontFamily:_n(undefined,140), fontWeight:_n(undefined,98), value:_n(undefined,149)}, false) // %11L21
_a(13, 0, {paddingLeft:_nf(0,5), paddingTop:_nf(0,5), text:_n(0,11)}, false) // %12L21
_f(14, 0, displayWidth, [_n(0,12), _n(undefined,9)]) // %13L21
_f(15, 0, plus, [_n(0,13), _n(undefined,30)]) // %14L21
_f(1, 0, internalApply, [_n(undefined,35), _n(0,0)])
_sp(0, 1) // %15L21
_m1(9, 0, _n(1,85), _n(0,15))
_sp(0, 1) // %16L21
_q(10, 0, [[_g(_n(1,84), true), _g(_n(0,3), false)]])
_sp(0, 1) // %17L21
_f(1, 0, internalApply, [_n(undefined,36), _n(0,0)])
_sp(0, 1) // %18L21
_m1(11, 0, _n(0,17), _n(0,18))
_sp(0, 1) // %19L21
_m1(11, 0, _n(0,17), _n(0,3))
_sp(0, 1) // %20L21<W>
_m1(11, 0, _n(0,17), _n(undefined,14))
_sp(0, 1) // %21L21
_q(10, 0, [[_g(_n(1,84), true), _g(_n(0,3), true)]])
_sp(0, 1) // %22L21
_m1(11, 0, _n(0,22), _n(undefined,38))
_sp(0, 1) // %23L21
_m1(11, 0, _n(0,22), _n(0,3))
_sp(0, 1) // %24L21<W>
_m1(11, 0, _n(0,22), _n(undefined,5))
_sp(0, 1) // %25L21
_cnp({"TextButton":1,"Clickable":2,"TextLabel":3})
_ae(21, _n(0,12), {top:_n(1,69), right:_n(1,91), width:_n(0,14), height:_n(undefined,40)}, undefined, {"0":_n(1,89)}) // area template expr 21
_aw(21, "onClick", _n(0,16), undefined, {sendRedoMessage:_tm(_n(1,92), _n(1,94), 11)}, undefined, undefined, 10)
_aw(21, "onClickableMouseDown", _n(0,19), undefined, {selected:_tm(_n(0,20), _n(0,21), 13)}, undefined, undefined, 12)
_aw(21, "onClickableMouseUp", _n(0,23), undefined, {selected:_tm(_n(0,24), _n(0,25), 13)}, undefined, undefined, 12)
_ac(2, "historyText", 0, true) // area template create 22
_mq(0, 0, ["message"]) // %0L22
_par(0, 0, ["param"]) // %1L22
_f(1, 0, displayWidth, [_n(undefined,150), _n(undefined,9)]) // %2L22
_f(2, 0, plus, [_n(0,2), _n(undefined,30)]) // %3L22
_cnp({"TextLabel":1})
_ae(22, _n(undefined,150), {top:_n(1,16), horizontalCenter:_n(1,97), width:_n(0,3), height:_n(undefined,40)}, undefined, {"0":_n(undefined,39)}) // area template expr 22
_ac(2, "history", 0, true) // area template create 23
_mq(0, 0, ["message"]) // %0L23
_par(0, 0, ["param"]) // %1L23
_f(1, 0, me, [])
_sp(0, 1) // %2L23
_d(2, 0, "scrollbar", _n(0,2))
_sp(0, 1) // %3L23
_a(3, 0, {type:_n(undefined,135), element:_n(0,3)}, false) // %4L23
_d(2, 0, "scrollView", _n(0,2))
_sp(0, 1) // %5L23
_a(3, 0, {type:_n(undefined,135), element:_n(0,5)}, false) // %6L23
_a(4, 0, {point1:_n(0,4), point2:_n(0,6), equals:_n(undefined,16)}, false) // %7L23
_p(3, 0, 6, _n(0,5))
_sp(0, 1) // %8L23
_p(4, 0, 7, _n(0,8))
_sp(0, 1) // %9L23<W>
_p(4, 0, 8, _n(0,8))
_sp(0, 1) // %10L23<W>
_a(2, 0, {type:_n(undefined,135), element:_n(0,2)}, false) // %11L23
_a(3, 0, {point1:_n(undefined,25), point2:_n(0,11), equals:_nt(undefined,157)}, false) // %12L23
_p(4, 0, 9, _n(0,3))
_sp(0, 1) // %13L23
_f(5, 0, bool, [_n(0,13)])
_sp(0, 1) // %14L23
_p(4, 0, 19, _n(0,8))
_se(4, 0) // %15L23
_p(11, 0, 20, _n(0,8)) // %16L23
_f(12, 0, div, [_n(0,15), _n(0,16)])
_se(12, 0) // %17L23
_p(4, 0, 21, _n(0,8)) // %18L23
_a(4, 0, {type:_n(undefined,126), element:_n(0,8)}, undefined) // %19L23
_a(5, 0, {point1:_nf(0,18), point2:_n(0,19)}, false) // %20L23
_p(12, 0, 22, _n(0,8))
_se(12, 0) // %21L23
_f(13, 0, bool, [_n(0,21)])
_se(13, 0) // %22L23
_q(14, 0, [[_g(_n(0,22), true)], []])
_se(14, 0) // %23L23
_m(15, 0, _n(0,23), [_n(undefined,179), _n(undefined,180)])
_se(15, 0) // %24L23
_cnp({"VerticalScrollableWithScrollbarBasicDesign":1,"UniformScrollableWithScrollbar":2,"ScrollableWithScrollbarExt":3,"ScrollableWithControllerExt":4,"ScrolledDocumentContext":5,"UniformScrollableWithController":6})
_ae(23, undefined, {width:_n(1,99), top:_n(1,102), left:_n(1,103), bottom:_n(1,104), offsetBetweenViewAndScrollbar:_n(0,7)}, undefined, {"0":_n(undefined,151)}) // area template expr 23
_aw(23, "onHistoryChange", _n(1,105), undefined, {setWasMoved:_tm(_n(0,9), _n(undefined,5), 11),setScrollToEnd:_tm(_n(0,10), _n(undefined,14), 11)}, undefined, undefined, 10)
_ac(23, "scrollView", 0, true) // area template create 24
_mq(0, 0, ["message"]) // %0L24
_par(0, 0, ["param"]) // %1L24
_f(1, 0, me, [])
_sp(0, 1) // %2L24
_d(2, 0, "scrolledDocument", _n(0,2))
_sp(0, 1) // %3L24
_cnp({"ScrollView":1,"VerticalScrolledViewBasicDesign":2})
_ae(24, undefined, {left:_n(undefined,16), rightMargin:_n(1,12), leftMargin:_n(undefined,63), top:_n(undefined,16), bottom:_n(undefined,16)}, undefined, {"0":_n(undefined,156), "6":_n(0,3)}) // area template expr 24
_ac(24, "scrolledDocument", 0, true) // area template create 25
_mq(0, 0, ["message"])
_sp(0, 1) // %0L25
_par(0, 0, ["param"]) // %1L25
_f(1, 0, offset, [_n(undefined,10), _n(undefined,11)])
_se(1, 0) // %2L25
_f(2, 0, abs, [_n(0,2)])
_se(2, 0) // %3L25
_f(3, 0, div, [_n(0,3), _n(undefined,12)])
_se(3, 0) // %4L25
_f(4, 0, ceil, [_n(0,4)])
_se(4, 0) // %5L25
_f(9, 0, minus, [_n(3,11), _n(0,5)])
_se(9, 0) // %6L25
_f(1, 0, offset, [_n(undefined,13), _n(undefined,10)])
_se(1, 0) // %7L25
_f(2, 0, div, [_n(0,7), _n(undefined,12)])
_se(2, 0) // %8L25
_f(3, 0, floor, [_n(0,8)])
_se(3, 0) // %9L25
_f(10, 0, min, [_n(0,6), _n(0,9)])
_se(10, 0) // %10L25
_f(11, 0, max, [_n(undefined,8), _n(0,10)])
_se(11, 0) // %11L25
_f(1, 0, offset, [_n(undefined,13), _n(undefined,11)])
_se(1, 0) // %12L25
_f(2, 0, div, [_n(0,12), _n(undefined,12)])
_se(2, 0) // %13L25
_f(3, 0, floor, [_n(0,13)])
_se(3, 0) // %14L25
_f(10, 0, min, [_n(3,14), _n(0,14)])
_se(10, 0) // %15L25
_f(11, 0, max, [_n(undefined,8), _n(0,15)])
_se(11, 0) // %16L25
_rcc(12, 0, [_n(0,11), _n(0,16)])
_se(12, 0) // %17L25
_f(13, 0, sequence, [_n(0,17)])
_se(13, 0) // %18L25
_m1(14, 0, _n(3,13), _n(0,18))
_se(14, 0) // %19L25
_w(1, 0, ["context","wasMoved"], _n(undefined,5),true)
_sp(0, 1) // %20L25<W>
_w(1, 0, ["context","scrollToEnd"], _n(undefined,5),true)
_sp(0, 1) // %21L25<W>
_f(1, 0, me, [])
_sp(0, 1) // %22L25
_a(2, 0, {label:_n(undefined,160), element:_n(0,22)}, undefined) // %23L25
_f(11, 0, lessThanOrEqual, [_n(3,107), _n(0,3)])
_se(11, 0) // %24L25
_w(1, 0, ["context","selected"], _n(undefined,5),true)
_sp(0, 1) // %25L25<W>
_q(2, 0, [[_g(_n(0,25), true)]]) // %26L25
_w(1, 0, ["context","mouseDownY"], _n(undefined,8),true)
_sp(0, 1) // %27L25<W>
_a(2, 0, {point1:_nf(undefined,161), point2:_nf(undefined,117), equals:_nt(0,27), priority:_nt(undefined,162)}, false) // %28L25
_m1(3, 0, _n(0,26), _n(0,28)) // %29L25
_q(2, 0, [[_g(_n(0,21), true)]]) // %30L25
_m1(3, 0, _n(0,30), _n(undefined,14)) // %31L25
_q(4, 0, [[_g(_n(0,31), false)]]) // %32L25
_w(1, 0, ["context","initialScrollOffset"], _n(undefined,8),true) // %33L25
_q(2, 0, [[_g(_n(0,20), true)], []]) // %34L25
_m(3, 0, _n(0,34), [_n(undefined,168), _n(undefined,169)]) // %35L25
_a(4, 0, {equals:_nt(0,33), point1:_nf(undefined,163), point2:_nf(undefined,76), priority:_nt(0,35)}, false) // %36L25
_m1(5, 0, _n(0,32), _n(0,36)) // %37L25
_a(4, 0, {point1:_nf(undefined,164), point2:_nf(undefined,170), equals:_nt(undefined,16), priority:_nt(0,35)}, false) // %38L25
_m1(5, 0, _n(0,30), _n(0,38)) // %39L25
_q(6, 0, [[_g(_n(0,25), true)], [_g(_n(2,14), true)]])
_sp(0, 1) // %40L25
_m1(7, 0, _n(0,40), _n(undefined,14))
_sp(0, 1) // %41L25
_q(8, 0, [[_g(_n(0,41), true)], [_g(_n(0,20), true)], []]) // %42L25
_m(9, 0, _n(0,42), [_n(undefined,168), _n(undefined,169), _n(undefined,168)]) // %43L25
_a(10, 0, {point1:_n(undefined,163), point2:_n(undefined,76), stability:_n(undefined,115), priority:_nt(0,43)}, false) // %44L25
_q(2, 0, [[_g(_n(0,25), false)]])
_sp(0, 1) // %45L25
_f(1, 0, internalApply, [_n(undefined,36), _n(0,0)])
_sp(0, 1) // %46L25
_m1(3, 0, _n(0,45), _n(0,46))
_sp(0, 1) // %47L25
_m1(3, 0, _n(0,45), _n(0,27))
_sp(0, 1) // %48L25<W>
_f(1, 0, offset, [_n(undefined,161), _n(undefined,131)])
_sp(0, 1)
_se(1, 0) // %49L25
_m1(3, 0, _n(0,45), _n(0,49))
_sp(0, 1)
_se(3, 0) // %50L25
_q(2, 0, [[_g(_n(0,25), false)]])
_sp(0, 1) // %51L25
_m1(3, 0, _n(0,51), _n(0,46))
_sp(0, 1) // %52L25
_m1(3, 0, _n(0,51), _n(0,25))
_sp(0, 1) // %53L25<W>
_m1(3, 0, _n(0,51), _n(undefined,14))
_sp(0, 1) // %54L25
_q(2, 0, [[_g(_n(0,25), true)]])
_sp(0, 1) // %55L25
_m1(3, 0, _n(0,55), _n(undefined,38))
_sp(0, 1) // %56L25
_m1(3, 0, _n(0,55), _n(0,25))
_sp(0, 1) // %57L25<W>
_m1(3, 0, _n(0,55), _n(undefined,5))
_sp(0, 1) // %58L25
_f(8, 0, internalApply, [_n(undefined,14), _n(0,41)])
_sp(0, 1) // %59L25
_bg(9, 0, _n(0,59), _n(0,22))
_sp(0, 1) // %60L25
_a(2, 0, {label:_nf(undefined,173), element:_n(0,22)}, false) // %61L25
_m1(14, 0, _n(3,119), _n(0,61)) // %62L25
_cnp({"DraggableScrolledDocumentExt":1,"Draggable":2,"Clickable":3,"ScrollableDocumentWithControllerExt":4,"UniformItemScrolledDocumentExt":5,"ScrolledDocument":6,"MoveableScrolledDocument":7,"ScrollStartAndEndEdges":8})
_acc(25, {"itemsInView":{data:_n(0,19),partner:undefined}})
_ae(25, undefined, {topDrag:_n(0,29), leftDrag:_n(undefined,63), frame:_n(undefined,16), scrolledDocumentLength:_n(3,108), notBeforeStart:_n(undefined,165), notBeyondEnd:_n(undefined,166), stayAtStartWhenShort:_n(undefined,167), scrollInitialOffset:_n(0,37), scrollToEnd:_n(0,39), scrollStabiity:_n(0,44), startFirstItemInDoc:_n(undefined,63)}, undefined, {"0":_n(undefined,158), "7":_n(0,20), "8":_n(0,21), "18":_n(undefined,126), "19":_n(0,3), "20":_n(3,107), "21":_n(0,23), "22":_n(0,24)}) // area template expr 25
_aw(25, "onDraggableMouseDown", _n(0,47), undefined, {writeY:_tm(_n(0,48), _n(0,50), 5)}, undefined, undefined, 4)
_aw(25, "onClickableMouseDown", _n(0,52), undefined, {selected:_tm(_n(0,53), _n(0,54), 5)}, undefined, undefined, 4)
_aw(25, "onClickableMouseUp", _n(0,56), undefined, {selected:_tm(_n(0,57), _n(0,58), 5)}, undefined, undefined, 4)
_aw(25, "wasMoved", _n(0,60), undefined, {wasMoved:_tm(_n(0,20), _n(undefined,14), 11)}, undefined, undefined, 10)
_ac(25, "itemsInView", 15, true) // area template create 26
_mq(0, 0, ["message"]) // %0L26
_par(0, 0, ["param"]) // %1L26
_f(16, 0, me, []) // %2L26
_f(17, 0, prev, [_n(0,2)]) // %3L26
_f(18, 0, empty, [_n(0,3)]) // %4L26
_f(19, 0, or, [_n(4,111), _n(0,4)]) // %5L26
_m1(20, 0, _n(4,13), _n(0,5)) // %6L26
_q(21, 0, [[_g(_n(4,12), true), _g(_n(0,6), true), _g(_n(4,115), o("right","bottom"))], [_g(_n(4,12), true), _g(_n(0,6), true)]]) // %7L26
_q(21, 0, [[_g(_n(4,12), true), _g(_n(0,6), true)]]) // %8L26
_f(16, 0, internalApply, [_n(undefined,49), _n(0,1)]) // %9L26
_m1(17, 0, _n(4,13), _n(0,9)) // %10L26
_f(18, 0, mul, [_n(0,10), _n(undefined,12)]) // %11L26
_m1(22, 0, _n(0,8), _n(0,11)) // %12L26
_f(23, 0, uminus, [_n(0,12)]) // %13L26
_m(24, 0, _n(0,7), [_n(0,13), _n(0,12)]) // %14L26
_m1(22, 0, _n(0,8), _n(1,61)) // %15L26
_m1(22, 0, _n(0,8), _n(4,116)) // %16L26
_a(25, 0, {equals:_nt(0,14), point1:_nf(0,15), point2:_nf(0,16)}, false) // %17L26
_f(19, 0, plus, [_n(0,11), _n(undefined,174)]) // %18L26
_m1(20, 0, _n(4,119), _n(0,18)) // %19L26
_f(21, 0, uminus, [_n(0,19)]) // %20L26
_m(22, 0, _n(4,118), [_n(0,20), _n(0,19)]) // %21L26
_a(23, 0, {equals:_nt(0,21), point1:_nf(1,62), point2:_nf(4,122)}, false) // %22L26
_a(17, 0, {type:_n(undefined,64), element:_n(0,2), content:_n(undefined,65)}, false) // %23L26
_a(17, 0, {type:_n(undefined,68), element:_n(0,2), content:_n(undefined,65)}, false) // %24L26
_cnp({"HuaRongDaoPreview":1,"HuaRongDaoBase":2,"ScrolledItem":3,"VerticalScrolledItemBasicDesign":4})
_acc(26, {"blocks":{data:_n(4,8),partner:undefined}})
_ae(26, _n(4,110), {left:_n(undefined,171), right:_n(undefined,172), "content-height":_n(4,113), "content-width":_n(4,114), beginningOfItem:_n(0,17), endOfItem:_n(0,22), posByInvisiblePart:_n(undefined,63)}, undefined, {"0":_n(4,112)}) // area template expr 26
_ac(26, "blocks", 15, true) // area template create 27
_mq(0, 0, ["message"]) // %0L27
_par(0, 0, ["param"]) // %1L27
_f(16, 0, internalApply, [_n(undefined,49), _n(0,1)]) // %2L27
_p(17, 0, 10, _n(0,2)) // %3L27
_p(17, 0, 11, _n(0,2)) // %4L27
_m(18, 0, _n(5,123), [_n(0,3), _n(undefined,9), _n(0,4)]) // %5L27
_a(19, 0, {value:_nf(0,5), fontSize:_nf(5,125), fontFamily:_n(undefined,52), fontVariant:_n(undefined,53), color:_n(undefined,54)}, false) // %6L27
_p(17, 0, 12, _n(0,2)) // %7L27
_f(18, 0, bool, [_n(0,7)]) // %8L27
_q(19, 0, [[_g(_n(0,8), true)]]) // %9L27
_m1(20, 0, _n(0,9), _n(0,7)) // %10L27
_p(17, 0, 13, _n(0,2)) // %11L27
_f(18, 0, bool, [_n(0,11)]) // %12L27
_q(19, 0, [[_g(_n(0,12), true)]]) // %13L27
_a(18, 0, {src:_nf(0,11), size:_nf(undefined,57)}, false) // %14L27
_m1(20, 0, _n(0,13), _n(0,14)) // %15L27
_p(17, 0, 14, _n(0,2)) // %16L27
_a(18, 0, {rotate:_nf(0,16)}, false) // %17L27
_m1(20, 0, _n(0,13), _n(0,17)) // %18L27
_a(21, 0, {text:_n(0,6), background:_nf(0,10), image:_nf(0,15), transform:_nf(0,18), borderColor:_n(undefined,54), borderWidth:_nf(5,128), borderStyle:_n(undefined,60), borderRadius:_nf(5,130)}, false) // %19L27
_p(17, 0, 3, _n(0,2)) // %20L27
_f(18, 0, pos, [_n(1,10), _n(0,20)]) // %21L27
_f(19, 0, internalApply, [_n(undefined,120), _n(0,21)]) // %22L27
_f(20, 0, div, [_n(0,22), _n(5,131)]) // %23L27
_f(21, 0, mul, [_n(0,23), _n(undefined,152)]) // %24L27
_a(22, 0, {point1:_n(1,23), point2:_n(undefined,66), equals:_nt(0,24)}, false) // %25L27
_f(19, 0, internalApply, [_n(undefined,122), _n(0,21)]) // %26L27
_f(20, 0, div, [_n(0,26), _n(5,131)]) // %27L27
_f(21, 0, mul, [_n(0,27), _n(undefined,152)]) // %28L27
_a(22, 0, {point1:_n(1,24), point2:_n(undefined,22), equals:_nt(0,28)}, false) // %29L27
_p(17, 0, 16, _n(0,2)) // %30L27
_f(18, 0, mul, [_n(0,30), _n(undefined,152)]) // %31L27
_p(17, 0, 17, _n(0,2)) // %32L27
_f(18, 0, mul, [_n(0,32), _n(undefined,152)]) // %33L27
_cnp({"Block":1})
_ppia(_n(undefined,70))
_ae(27, _n(0,19), {stabilityRowPosition:_n(undefined,63), stabilityColumnPosition:_n(undefined,63), topDrag:_n(undefined,63), leftDrag:_n(undefined,63), temporaryColumnPosition:_n(undefined,63), rightOfEmbeddingLeft:_n(undefined,63), leftOfEmbeddingRight:_n(undefined,63), temporaryRowPosition:_n(undefined,63), insideEmbeddingTop:_n(undefined,63), aboveEmbeddingBottom:_n(undefined,63), initialColumnPosition:_n(0,25), initialRowPosition:_n(0,29), height:_n(0,31), width:_n(0,33)}, undefined, {"0":_n(undefined,62)}) // area template expr 27

_ac(23, "scrollbar", 0, true) // area template create 28
_mq(0, 0, ["message"]) // %0L28
_par(0, 0, ["param"]) // %1L28
_f(1, 0, me, [])
_sp(0, 1) // %2L28
_d(2, 0, "cursor", _n(0,2))
_sp(0, 1) // %3L28
_p(3, 0, 5, _n(0,3))
_sp(0, 1) // %4L28
_f(1, 0, offset, [_n(undefined,10), _n(undefined,11)])
_se(1, 0) // %5L28
_f(2, 0, abs, [_n(0,5)])
_se(2, 0) // %6L28
_f(3, 0, mul, [_n(undefined,178), _n(0,6)])
_se(3, 0) // %7L28
_f(4, 0, min, [_n(undefined,30), _n(0,7)])
_se(4, 0) // %8L28
_f(13, 0, mul, [_n(0,6), _n(1,17)])
_se(13, 0) // %9L28
_f(14, 0, max, [_n(0,8), _n(0,9)])
_se(14, 0) // %10L28
_f(15, 0, floor, [_n(0,10)])
_se(15, 0) // %11L28
_f(16, 0, minus, [_n(0,11), _n(0,9)])
_se(16, 0) // %12L28
_f(17, 0, max, [_n(undefined,8), _n(0,12)])
_se(17, 0) // %13L28
_f(18, 0, minus, [_n(0,6), _n(0,13)])
_se(18, 0) // %14L28
_f(19, 0, div, [_n(0,14), _n(1,16)])
_se(19, 0) // %15L28
_a(3, 0, {type:_n(undefined,126), element:_n(0,3)}, false) // %16L28
_a(4, 0, {point1:_n(undefined,76), point2:_n(0,16)}, false) // %17L28
_a(20, 0, {ratio:_nt(0,15), pair1:_n(1,20), pair2:_n(0,17)}, false)
_se(20, 0) // %18L28
_a(16, 0, {equals:_nt(0,11), point1:_n(undefined,76), point2:_n(undefined,170)}, false)
_se(16, 0) // %19L28
_cnp({"Scrollbar":1,"ScrollStartAndEndEdges":2,"VerticalScrollbarBasicDesign":3})
_ae(28, _n(undefined,176), {bindCursorAndView:_n(0,18), cursorStart:_n(undefined,63), width:_n(1,24), top:_n(undefined,8), bottom:_n(undefined,8)}, undefined, {"0":_n(undefined,177), "9":_n(0,4)}) // area template expr 28

_ac(28, "cursor", 0, true) // area template create 29
_mq(0, 0, ["message"])
_sp(0, 1) // %0L29
_par(0, 0, ["param"]) // %1L29
_w(1, 0, ["context","selected"], _n(undefined,5),true)
_sp(0, 1) // %2L29<W>
_q(2, 0, [[_g(_n(0,2), true)]]) // %3L29
_w(1, 0, ["context","mouseDownY"], _n(undefined,8),true)
_sp(0, 1) // %4L29<W>
_a(2, 0, {point1:_nf(undefined,10), point2:_nf(undefined,117), equals:_nt(0,4), priority:_nt(undefined,118)}, false) // %5L29
_m1(3, 0, _n(0,3), _n(0,5)) // %6L29
_q(2, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %7L29
_f(1, 0, internalApply, [_n(undefined,36), _n(0,0)])
_sp(0, 1) // %8L29
_m1(3, 0, _n(0,7), _n(0,8))
_sp(0, 1) // %9L29
_m1(3, 0, _n(0,7), _n(0,4))
_sp(0, 1) // %10L29<W>
_f(1, 0, offset, [_n(undefined,10), _n(undefined,131)])
_sp(0, 1)
_se(1, 0) // %11L29
_m1(3, 0, _n(0,7), _n(0,11))
_sp(0, 1)
_se(3, 0) // %12L29
_q(2, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %13L29
_m1(3, 0, _n(0,13), _n(0,8))
_sp(0, 1) // %14L29
_m1(3, 0, _n(0,13), _n(0,2))
_sp(0, 1) // %15L29<W>
_m1(3, 0, _n(0,13), _n(undefined,14))
_sp(0, 1) // %16L29
_q(2, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %17L29
_m1(3, 0, _n(0,17), _n(undefined,38))
_sp(0, 1) // %18L29
_m1(3, 0, _n(0,17), _n(0,2))
_sp(0, 1) // %19L29<W>
_m1(3, 0, _n(0,17), _n(undefined,5))
_sp(0, 1) // %20L29
_cnp({"Cursor":1,"Draggable":2,"Clickable":3,"VerticalScrollbarCursorBasicDesign":4})
_ae(29, _n(undefined,181), {cursorLength:_n(1,19), topDrag:_n(0,6), leftDrag:_n(undefined,63), left:_n(undefined,8), right:_n(undefined,8)}, undefined, {"0":_n(undefined,182), "5":_n(0,2)}) // area template expr 29
_aw(29, "onDraggableMouseDown", _n(0,9), undefined, {writeY:_tm(_n(0,10), _n(0,12), 5)}, undefined, undefined, 4)
_aw(29, "onClickableMouseDown", _n(0,14), undefined, {selected:_tm(_n(0,15), _n(0,16), 5)}, undefined, undefined, 4)
_aw(29, "onClickableMouseUp", _n(0,18), undefined, {selected:_tm(_n(0,19), _n(0,20), 5)}, undefined, undefined, 4)
_mss(0, 25)
_mss(1, 15)
// compile time: 0.45 s
// nr wont change: 334
