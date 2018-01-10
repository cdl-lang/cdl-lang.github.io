var fmtVersion = 2.3;

// debuginfo=0 optimize=true errors= xflags= strictness=
// start 0.009 s
// nr PathTreeNodes 1476
// multiple paths 451
// load js 0.058 s
// warning: unused classes: ::DraggableInContainer, ::DraggableInContainerHandle, ::DraggableHandle, ::DraggableEdge, ::HorizontalResizingDraggableEdge, ::VerticalResizingDraggableEdge, ::HorizontalSpacingHandle, ::VerticalSpacingHandle, ::DraggableEdgeLeft, ::DraggableEdgeRight, ::DraggableEdgeTop, ::DraggableEdgeBottom, ::DraggableCornerBottomRight, ::DraggableCornerBottomLeft, ::DragWrapper, ::Font, ::AnimateTopLeft, ::AnimateArea, ::MenuText, ::Badge, ::MarkArea, ::NonAreaSetWithScrollBar, ::EditButton, ::CloseButton, ::DeleteButton, ::ActionButton, ::LeftOfLabel, ::RightOfLabel, ::ZAboveSiblings, ::AboveSibling, ::HorizontalAlignWithSibling, ::VerticalAlignWithSibling, ::BelowSiblings, ::AlignLeftWithSibling, ::AlignBottomWithSibling, ::AlignHorizontalCenterWithSibling, ::AlignVerticalCenterWithSibling, ::FlipButton, ::TextValueInput, ::BlockEvents, ::ModalLayer, ::ChoiceButton, ::RemoteConnectionStateIndicator, ::TextLabel14Px, ::TextLabel20PxOnBackground, ::UnderlinedTextLabel14Px, ::UnderlinedTextLabel20Px, ::FocusRingContext, ::FocusRing, ::GuaranteeImmediateVisibility, ::OpenURLOnClick, ::StretchedList, ::AutoSizeFixedMatrix
// remove qualifiers 0.057 s
// create template tree 0.012 s
// cycle 1 0.004 s
// cycle 2 0.225 s
// cycle 3 0.051 s
// cycle 4 0.038 s
// end 0.039 s
var globalMessageNodeIndex = 0
var pointerNodeIndex = 1
var nrExports = 7
var exportPaths = [null,["context","matrixData"],["context","history"],["context","width"],["context","hover"],["context","affectedCells"],["context","state"]]
var pathToExportId = {"next":{"context":{"next":{"matrixData":{"value":1},"history":{"value":2},"width":{"value":3},"hover":{"value":4},"affectedCells":{"value":5},"state":{"value":6}}}}}

var globalAreasUnderPointerNodeIndex = undefined
var globalDefaultsNodeIndex = 48
_mq(0, 0, ["message"])
_sp(0, 1) // %0G<W>
_ptr(0, 0, ["pointer"]) // %1G
_v(constEmptyOS, undefined) // %2G
_v([{configurations: [_]}], undefined) // %3G
_v([_], undefined) // %4G
_v(["flip2"], undefined) // %5G
_v([{boardSizes: [{configurations: [{boards: [{board: [true, true, true, true, true, true, true, true, true], moves: []}], category: ["0 moves"]}, {boards: [{board: [true, false, true, false, false, false, true, false, true], moves: [{column: [1], row: [1]}]}, {board: [false, false, false, true, false, true, true, true, true], moves: [{column: [1], row: [0]}]}, {board: [true, true, true, true, true, false, true, false, false], moves: [{column: [2], row: [2]}]}], category: ["1 move"]}, {boards: [{board: [true, false, true, false, false, true, true, true, false], moves: [{column: [1], row: [1]}, {column: [2], row: [2]}]}, {board: [false, false, true, false, true, false, true, false, false], moves: [{column: [0], row: [0]}, {column: [2], row: [2]}]}, {board: [false, true, false, false, true, false, true, false, true], moves: [{column: [1], row: [0]}, {column: [1], row: [1]}]}, {board: [true, false, false, true, true, true, true, false, false], moves: [{column: [2], row: [0]}, {column: [2], row: [2]}]}], category: ["2 moves"]}, {boards: [{board: [false, false, false, false, false, true, false, false, false], moves: [{column: [2], row: [0]}, {column: [2], row: [2]}, {column: [0], row: [1]}]}, {board: [false, true, true, false, false, false, false, true, true], moves: [{column: [0], row: [2]}, {column: [1], row: [1]}, {column: [0], row: [0]}]}, {board: [false, true, false, true, true, true, true, false, false], moves: [{column: [0], row: [0]}, {column: [2], row: [1]}, {column: [1], row: [1]}]}], category: ["3 moves"]}, {boards: [{board: [true, false, true, true, false, true, true, false, false], moves: [{column: [0], row: [0]}, {column: [2], row: [1]}, {column: [1], row: [1]}, {column: [1], row: [0]}]}, {board: [true, false, true, false, false, true, false, false, true], moves: [{column: [2], row: [1]}, {column: [2], row: [2]}, {column: [1], row: [0]}, {column: [0], row: [1]}]}], category: ["4 moves"]}, {boards: [{board: [false, false, false, true, false, true, false, true, false], moves: [{col: [2], row: [1]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [true, true, false, true, false, false, true, false, false], moves: [{col: [2], row: [1]}, {col: [1], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [true, false, true, true, false, true, false, true, false], moves: [{col: [2], row: [2]}, {col: [0], row: [2]}, {col: [2], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, true, false, true, true, false, false, false], moves: [{col: [2], row: [1]}, {col: [1], row: [1]}, {col: [0], row: [1]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [true, true, false, false, false, false, false, true, true], moves: [{col: [2], row: [2]}, {col: [2], row: [1]}, {col: [1], row: [1]}, {col: [0], row: [1]}, {col: [0], row: [0]}]}, {board: [true, true, true, true, true, true, true, true, false], moves: [{col: [2], row: [2]}, {col: [0], row: [2]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}]}, {board: [false, true, false, false, true, false, false, false, false], moves: [{col: [2], row: [1]}, {col: [1], row: [1]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [true, false, false, false, false, false, true, false, true], moves: [{col: [2], row: [2]}, {col: [1], row: [2]}, {col: [1], row: [1]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, false, false, true, true, false, true, true], moves: [{col: [1], row: [2]}, {col: [0], row: [2]}, {col: [2], row: [1]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [true, true, true, false, false, false, false, false, false], moves: [{col: [2], row: [2]}, {col: [1], row: [2]}, {col: [0], row: [2]}, {col: [2], row: [1]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [0], row: [0]}]}, {board: [true, true, false, true, true, false, false, false, false], moves: [{col: [2], row: [2]}, {col: [1], row: [2]}, {col: [0], row: [2]}, {col: [2], row: [1]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}]}, {board: [true, false, false, false, false, true, false, true, false], moves: [{col: [2], row: [2]}, {col: [1], row: [2]}, {col: [0], row: [2]}, {col: [2], row: [1]}, {col: [1], row: [1]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}]}, {board: [false, true, false, true, false, true, false, true, false], moves: [{col: [2], row: [2]}, {col: [1], row: [2]}, {col: [0], row: [2]}, {col: [2], row: [1]}, {col: [1], row: [1]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}], category: ["5-9 moves"]}], height: [3], width: [3]}, {configurations: [{boards: [{board: [false, false, true, true, true, true, true, true, false, false, true, true, false, true, true, true], moves: [{col: [0], row: [2]}, {col: [0], row: [0]}]}, {board: [false, false, false, false, true, false, false, false, true, true, true, false, true, true, true, true], moves: [{col: [3], row: [1]}, {col: [1], row: [0]}]}, {board: [false, true, true, true, true, false, true, true, true, false, true, true, false, true, true, true], moves: [{col: [0], row: [2]}, {col: [0], row: [1]}]}, {board: [false, true, true, true, false, false, true, true, false, false, true, true, false, false, false, true], moves: [{col: [1], row: [3]}, {col: [0], row: [1]}]}], category: ["2 moves"]}, {boards: [{board: [false, true, false, true, true, true, true, true, false, true, true, true, true, true, true, true], moves: [{col: [0], row: [1]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, true, false, false, false, false, false, true, false, false, false, true, true, false, true, true], moves: [{col: [1], row: [2]}, {col: [2], row: [0]}, {col: [0], row: [0]}]}], category: ["3 moves"]}, {boards: [{board: [true, false, true, false, false, true, false, true, true, false, true, false, false, false, true, true], moves: [{col: [1], row: [3]}, {col: [2], row: [2]}, {col: [2], row: [1]}, {col: [1], row: [1]}, {col: [3], row: [0]}]}, {board: [false, false, false, true, true, true, true, false, false, true, false, true, false, false, false, false], moves: [{col: [2], row: [3]}, {col: [0], row: [2]}, {col: [1], row: [1]}, {col: [3], row: [0]}, {col: [2], row: [0]}, {col: [1], row: [0]}]}], category: ["others"]}], height: [4], width: [4]}, {configurations: [{boards: [{board: [true, false, true, true, true, false, false, false, true, true, true, false, true, true, true, true, true, true, true, true], moves: [{col: [1], row: [1]}]}], category: ["1 move"]}, {boards: [{board: [false, true, false, false, true, false, true, false, true, true, true, true, true, true, true, true, true, true, true, true], moves: [{col: [2], row: [0]}, {col: [0], row: [0]}]}, {board: [true, true, true, true, true, false, true, true, true, true, false, false, false, true, true, false, false, false, false, true], moves: [{col: [2], row: [3]}, {col: [0], row: [2]}]}], category: ["2 moves"]}, {boards: [{board: [false, true, true, true, true, true, false, false, true, true, true, false, true, false, true, true, true, false, false, false], moves: [{col: [3], row: [3]}, {col: [1], row: [1]}, {col: [0], row: [0]}]}, {board: [false, false, false, true, false, false, false, false, true, false, true, true, false, true, false, true, true, true, true, true], moves: [{col: [4], row: [1]}, {col: [2], row: [1]}, {col: [0], row: [0]}]}, {board: [false, false, false, true, true, false, false, false, false, true, true, true, true, true, true, true, false, false, false, true], moves: [{col: [2], row: [3]}, {col: [2], row: [1]}, {col: [0], row: [0]}]}, {board: [false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, true, false, true, true, true], moves: [{col: [0], row: [3]}, {col: [0], row: [2]}, {col: [0], row: [0]}]}], category: ["3 moves"]}, {boards: [{board: [true, false, true, false, true, false, false, false, true, true, true, false, true, true, true, false, false, false, true, true], moves: [{col: [1], row: [3]}, {col: [2], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, false, true, true, false, false, false, true, true, false, false, true, true, true, true, true, true, true, true], moves: [{col: [1], row: [1]}, {col: [0], row: [1]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, false, true, false, false, false, true, true, true, true, true, false, false, true, true, true, true, true, true], moves: [{col: [3], row: [1]}, {col: [2], row: [1]}, {col: [4], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, true, false, true, false, true, false, false, false, false, true, false, false, true, false, true, false, false, true], moves: [{col: [2], row: [3]}, {col: [0], row: [3]}, {col: [3], row: [1]}, {col: [0], row: [0]}]}], category: ["4 moves"]}, {boards: [{board: [true, true, false, false, false, false, false, false, true, false, true, true, true, true, true, true, true, true, true, false], moves: [{col: [4], row: [2]}, {col: [4], row: [1]}, {col: [3], row: [1]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, true, false, false, false, false, true, true, true, false, false, true, false, true, true, true, false, true, true], moves: [{col: [4], row: [3]}, {col: [2], row: [3]}, {col: [4], row: [2]}, {col: [1], row: [2]}, {col: [4], row: [0]}, {col: [0], row: [0]}]}, {board: [true, true, true, false, true, false, true, true, true, false, true, false, true, true, false, false, true, true, false, false], moves: [{col: [2], row: [3]}, {col: [0], row: [3]}, {col: [4], row: [2]}, {col: [2], row: [2]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}]}, {board: [false, true, false, true, false, true, true, false, false, true, false, true, true, false, true, false, true, false, true, false], moves: [{col: [4], row: [3]}, {col: [2], row: [3]}, {col: [0], row: [3]}, {col: [4], row: [1]}, {col: [3], row: [1]}, {col: [2], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}]}, {board: [true, true, true, true, false, true, false, true, false, true, false, true, false, true, true, false, true, false, true, true], moves: [{col: [2], row: [3]}, {col: [3], row: [2]}, {col: [1], row: [2]}, {col: [0], row: [2]}, {col: [4], row: [1]}, {col: [3], row: [1]}, {col: [0], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}]}, {board: [false, false, true, true, false, false, false, true, true, false, false, true, false, false, true, false, false, true, false, true], moves: [{col: [4], row: [3]}, {col: [3], row: [3]}, {col: [2], row: [3]}, {col: [0], row: [3]}, {col: [1], row: [2]}, {col: [4], row: [1]}, {col: [2], row: [1]}, {col: [1], row: [1]}, {col: [0], row: [1]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, true, true, true, false, true, false, false, false, true, true, false, false, false, true, false, true, true, true, false], moves: [{col: [4], row: [3]}, {col: [3], row: [3]}, {col: [2], row: [3]}, {col: [1], row: [3]}, {col: [0], row: [3]}, {col: [4], row: [2]}, {col: [3], row: [2]}, {col: [2], row: [2]}, {col: [1], row: [2]}, {col: [0], row: [2]}, {col: [4], row: [1]}, {col: [3], row: [1]}, {col: [2], row: [1]}, {col: [1], row: [1]}, {col: [0], row: [1]}, {col: [4], row: [0]}, {col: [3], row: [0]}, {col: [2], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}], category: ["others"]}], height: [4], width: [5]}], gameType: ["flip1"]},{boardSizes: [{configurations: [{boards: [{board: [true, true, true, true, true, true, true, true, true], moves: []}], category: ["0 moves"]}, {boards: [{board: [true, false, true, false, false, false, true, false, true], moves: [{column: [1], row: [1]}]}, {board: [false, false, false, false, true, true, false, true, true], moves: [{column: [0], row: [0]}]}], category: ["1 move"]}, {boards: [{board: [false, false, true, false, true, false, true, false, false], moves: [{column: [0], row: [0]}, {column: [2], row: [2]}]}, {board: [true, false, false, true, true, true, true, false, false], moves: [{column: [1], row: [1]}, {column: [2], row: [1]}]}, {board: [true, true, false, false, false, true, true, false, true], moves: [{column: [1], row: [1]}, {column: [2], row: [0]}]}, {board: [false, false, true, true, false, true, true, true, true], moves: [{column: [2], row: [0]}, {column: [2], row: [1]}]}, {board: [true, false, true, false, false, true, true, true, true], moves: [{column: [2], row: [1]}, {column: [2], row: [0]}]}], category: ["2 moves"]}, {boards: [{board: [false, true, false, true, false, true, false, true, false], moves: [{column: [0], row: [0]}, {column: [1], row: [1]}, {column: [2], row: [2]}]}, {board: [false, false, false, false, true, false, false, false, false], moves: [{column: [0], row: [0]}, {column: [1], row: [1]}, {column: [2], row: [2]}, {column: [1], row: [1]}]}], category: ["3 moves"]}], height: [3], width: [3]}, {configurations: [{boards: [{board: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], moves: []}], category: ["0 moves"]}, {boards: [{board: [false, false, false, false, true, false, true, true, true, false, true, true, true, false, true, true], moves: [{col: [1], row: [0]}]}], category: ["1 move"]}, {boards: [{board: [true, true, true, true, false, false, true, true, false, true, true, true, false, true, true, true], moves: [{col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [true, true, true, true, false, true, true, false, false, true, true, true, false, true, true, true], moves: [{col: [3], row: [0]}, {col: [0], row: [0]}]}, {board: [true, false, false, false, true, true, true, true, true, false, true, true, true, true, true, true], moves: [{col: [0], row: [2]}, {col: [0], row: [0]}]}, {board: [false, true, false, false, false, false, true, true, true, false, false, false, false, false, true, true], moves: [{col: [1], row: [2]}, {col: [0], row: [0]}]}], category: ["2 moves"]}, {boards: [{board: [false, false, false, false, false, false, false, true, false, false, true, true, false, false, true, true], moves: [{col: [1], row: [0]}, {col: [2], row: [0]}, {col: [0], row: [0]}]}, {board: [false, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true], moves: [{col: [0], row: [1]}, {col: [2], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, false, false, true, true, true, false, false, true, true, true, false, true, true, true], moves: [{col: [0], row: [0]}, {col: [3], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, false, false, false, false, true, true, false, true, true, true, false, false, false, false], moves: [{col: [0], row: [3]}, {col: [0], row: [1]}, {col: [0], row: [0]}]}], category: ["3 moves"]}, {boards: [{board: [true, true, true, true, false, false, false, false, false, true, false, true, false, true, false, true], moves: [{col: [3], row: [0]}, {col: [2], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [true, true, true, true, false, false, false, false, false, true, true, false, false, true, true, false], moves: [{col: [2], row: [0]}, {col: [3], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, false, true, false, false, false, true, false, true, true, true, false, true, true, true], moves: [{col: [3], row: [1]}, {col: [3], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [true, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true], moves: [{col: [2], row: [0]}, {col: [0], row: [1]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, false, true, false, false, false, false, false, false, true, false, false, false, true, false], moves: [{col: [1], row: [0]}, {col: [3], row: [1]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}], category: ["4 moves"]}, {boards: [{board: [true, false, false, false, true, true, true, true, false, false, false, false, true, true, true, true], moves: [{col: [0], row: [2]}, {col: [0], row: [1]}, {col: [0], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, true, false, true, false, false, true, false, false, false, true, false, false, false, true, false], moves: [{col: [1], row: [1]}, {col: [3], row: [1]}, {col: [0], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [true, false, true, false, true, false, true, false, false, true, false, true, false, true, false, true], moves: [{col: [1], row: [0]}, {col: [1], row: [1]}, {col: [2], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [true, true, true, true, false, true, true, false, false, true, true, false, true, false, false, true], moves: [{col: [1], row: [3]}, {col: [1], row: [0]}, {col: [3], row: [0]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, true, false, false, true, false, false, false, false, false, true, false, true, false, false, false], moves: [{col: [3], row: [3]}, {col: [1], row: [0]}, {col: [1], row: [1]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, true, true, true, false, true, true, true, true, true, true, true, false, true, true, true], moves: [{col: [0], row: [2]}, {col: [1], row: [2]}, {col: [0], row: [3]}, {col: [1], row: [0]}, {col: [0], row: [0]}]}, {board: [false, false, true, true, true, true, false, false, true, true, true, true, true, true, true, true], moves: [{col: [0], row: [1]}, {col: [2], row: [0]}, {col: [0], row: [0]}, {col: [2], row: [1]}, {col: [0], row: [0]}]}, {board: [false, true, false, false, false, true, false, false, false, true, true, true, false, true, false, false], moves: [{col: [3], row: [3]}, {col: [1], row: [1]}, {col: [2], row: [2]}, {col: [2], row: [1]}, {col: [0], row: [0]}]}, {board: [false, true, true, true, false, false, false, true, true, true, true, true, false, false, false, true], moves: [{col: [1], row: [1]}, {col: [0], row: [1]}, {col: [1], row: [2]}, {col: [0], row: [0]}, {col: [2], row: [0]}]}, {board: [true, true, true, false, true, true, false, true, true, false, true, false, false, true, true, false], moves: [{col: [3], row: [1]}, {col: [2], row: [1]}, {col: [0], row: [0]}, {col: [1], row: [0]}, {col: [2], row: [3]}]}], category: ["5 and more moves"]}], height: [4], width: [4]}, {configurations: [{boards: [{board: [true, false, true, true, true, true, false, true, true, true, true, false, true, true, true, false, false, false, false, false, true, false, true, true, true], moves: []}, {board: [true, true, true, true, false, true, true, true, true, false, true, true, true, true, false, false, false, false, false, false, true, true, true, true, false], moves: []}], category: ["1 move"]}, {boards: [{board: [true, false, false, false, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, false, false, false, true], moves: []}, {board: [true, true, true, false, true, false, true, false, false, false, true, false, true, false, true, false, false, false, true, true, true, false, true, false, true], moves: []}, {board: [true, true, false, true, true, true, true, false, false, true, true, true, true, true, true, true, true, false, false, true, true, true, false, true, true], moves: []}, {board: [true, true, true, false, true, true, true, false, false, true, true, true, true, true, true, true, true, false, false, true, true, true, true, false, true], moves: []}], category: ["2 moves"]}], height: [5], width: [5]}, {configurations: [{boards: [{board: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], moves: []}, {boards: [{board: [false, true, true, true, true, false, true, false, false, false, false, true, true, true, true, true, true, false, true, true], moves: [{column: [1], row: [1]}, {column: [4], row: [1]}, {column: [1], row: [3]}, {column: [4], row: [1]}, {column: [0], row: [0]}]}], category: ["5 moves"]}], category: ["0 moves"]}], height: [4], width: [5]}], gameType: ["flip2"]}], undefined) // %6G
_v([{boards: [_]}], undefined) // %7G
_v([{areaSetContent: [_]}], undefined) // %8G
_v([{board: [_]}], undefined) // %9G
_v([{type: ["left"]}], undefined) // %10G
_v([{type: ["right"]}], undefined) // %11G
_v([0], undefined) // %12G
_v(["left"], undefined) // %13G
_v(["right"], undefined) // %14G
_v([{type: ["top"]}], undefined) // %15G
_v([{type: ["bottom"]}], undefined) // %16G
_v(["top"], undefined) // %17G
_v(["bottom"], undefined) // %18G
_v(["flip1","flip2"], undefined) // %19G
_v([{width: [_]}], undefined) // %20G
_v([{height: [_]}], undefined) // %21G
_v({background: "#E6C35C"}, false) // %22G
_v([true], undefined) // %23G
_a(0, 0, {App:_n(undefined,23)}, false) // %24G
_v({html: {value: "<div style=\"width: 1cm;\">"}}, false) // %25G
_v({transitions: {left: 0.5}}, false) // %26G
_a(0, 0, {Intro:_n(undefined,23), LTRContainer:_n(undefined,23)}, false) // %27G
_v(["intro"], undefined) // %28G
_v("left", false) // %29G
_v({type: "left"}, false) // %30G
_v(0, true) // %31G
_v("right", false) // %32G
_v({type: "right"}, false) // %33G
_v({point1: {type: "left"}, point2: {type: "right"}, stability: true, priority: -1}, false) // %34G
_v({src: "image/ic_arrow_forward_48px.svg", size: "100%"}, false) // %35G
_v({invert: 100}, false) // %36G
_v([false], undefined) // %37G
_v(1, false) // %38G
_a(0, 0, {NextContainer:_n(undefined,23), IconButton:_n(undefined,23), DepressWhileMouseDown:_n(undefined,23), Clickable:_n(undefined,23)}, false) // %39G
_v(32, true) // %40G
_v([{subType: ["Click", "DoubleClick"], type: ["MouseUp"]}], undefined) // %41G
_v(["settings"], undefined) // %42G
_v([{type: ["MouseDown"]}], undefined) // %43G
_v([{recipient: ["end"], type: ["MouseUp"]}], undefined) // %44G
_f(1, 0, internalApply, [_n(undefined,44), _n(undefined,0)])
_sp(0, 1) // %45G
_v([{darkColor: [_]}], undefined) // %46G
_v([{darkPrimaryColor: ["#0097A7"], lightPrimaryColor: ["#B2EBF2"], primaryColor: ["#00BCD4"], accentColor: ["#CDDC39"], textPrimaryColor: ["#FFFFFF"], primaryTextColor: ["#212121"], secondaryTextColor: ["#757575"], dividerColor: ["#BDBDBD"], darkColor: ["hsl(200,50%,50%)"], darkIndirectHoverColor: ["hsl(200,40%,90%)"], darkHoverColor: ["hsl(200,40%,90%)"], lightColor: ["hsl(200,0%,100%)"], lightIndirectHoverColor: ["hsl(200,40%,65%)"], lightHoverColor: ["hsl(200,40%,65%)"], tileColorDarker: ["hsl(200,80%,40%)"], bgColor: ["hsl(45, 73%, 63%)"], bgColor1: ["hsl(45, 56%, 75%)"]}], undefined) // %47G
_w(0, 0, ["globalDefaults"], _n(undefined,47),false) // %48G
_f(1, 0, internalApply, [_n(undefined,46), _n(undefined,48)]) // %49G
_v(16, true) // %50G
_v({textAlign: "left", lineHeight: 1.25, value: "The goal of this puzzle is to make all tiles blue. You can change the color of a tile by clicking on it. However, when you do so, surrounding tiles also change color.<br><br>In game type 'flip1', the cells directly touching in horizontal and vertical direction change color, irrespective of their state.In game type 'flip2', all cells in the same row and column up until (and including) the first tile with another color flip.<br><br>Have fun.", color: "white", fontFamily: "Roboto", fontWeight: 300}, false) // %51G
_a(2, 0, {background:_nf(undefined,49), paddingLeft:_n(undefined,50), paddingRight:_n(undefined,50), html:_n(undefined,51)}, false) // %52G
_v(64, true) // %53G
_v({point1: {type: "left"}, point2: {type: "right"}, equals: 450, priority: -1}, false) // %54G
_v("left", true) // %55G
_v(8, true) // %56G
_v("right", true) // %57G
_a(0, 0, {Settings:_n(undefined,23), LTRContainer:_n(undefined,23)}, false) // %58G
_f(0, 0, empty, [_n(undefined,2)]) // %59G
_bg(1, 0, _n(undefined,59), _n(undefined,12)) // %60G
_v({src: "image/ic_arrow_back_48px.svg", size: "100%"}, false) // %61G
_v(["game"], undefined) // %62G
_v([{tileColorDarker: [_]}], undefined) // %63G
_f(1, 0, internalApply, [_n(undefined,63), _n(undefined,48)]) // %64G
_v({value: "Start configuration", color: "white", fontFamily: "Roboto", fontWeight: 300}, false) // %65G
_a(2, 0, {background:_nf(undefined,64), text:_n(undefined,65)}, false) // %66G
_v("bottom", true) // %67G
_v({type: "top"}, false) // %68G
_v([8], undefined) // %69G
_f(0, 0, empty, [_n(undefined,69)]) // %70G
_co(1, 0, _n(undefined,70), [{on:_n(undefined,23), use:_n(undefined,12)}, {on:_n(undefined,37), use:_n(undefined,69)}]) // %71G
_a(0, 0, {Configurations:_n(undefined,23), BasicListInAreaWithScrollbar:_n(undefined,23), BasicListInArea:_n(undefined,23), WheelScroll:_n(undefined,23)}, false) // %72G
_v([{point1: [{type: ["top"]}], point2: [{type: ["top"]}]}], undefined) // %73G
_v([{equals: [0]}], undefined) // %74G
_v("top", false) // %75G
_v({point1: {type: "top"}, point2: {type: "bottom"}, equals: 0}, false) // %76G
_v(undefined, true) // %77G
_v([{type: ["Wheel"]}], undefined) // %78G
_v([{deltaY: [_]}], undefined) // %79G
_v([1], undefined) // %80G
_v([2], undefined) // %81G
_v(152, true) // %82G
_v(8, false) // %83G
_v(0, false) // %84G
_v({type: "top", element: [new ElementReference("p1")]}, false) // %85G
_v([-15], undefined) // %86G
_v([{element: [new ElementReference("p1")], type: ["top"]}], undefined) // %87G
_v([{darkHoverColor: [_]}], undefined) // %88G
_f(1, 0, internalApply, [_n(undefined,88), _n(undefined,48)]) // %89G
_v(4, true) // %90G
_v([{category: [_]}], undefined) // %91G
_v("white", true) // %92G
_v("Roboto", true) // %93G
_v(300, true) // %94G
_v(24, true) // %95G
_a(0, 0, {BasicListInAreaWithScrollbar:_n(undefined,23), BasicListInArea:_n(undefined,23)}, false) // %96G
_v(116, true) // %97G
_v({point1: {type: "left"}, point2: {type: "right"}, min: 0}, false) // %98G
_v("solid", false) // %99G
_v("none", false) // %100G
_v([{bgColor1: [_]}], undefined) // %101G
_f(1, 0, internalApply, [_n(undefined,101), _n(undefined,48)]) // %102G
_v({type: "left", element: [new ElementReference("p1")]}, false) // %103G
_v(15, true) // %104G
_v([{element: [new ElementReference("p1")], type: ["left"]}], undefined) // %105G
_v(2, true) // %106G
_v("solid", true) // %107G
_v("#E6C35C", true) // %108G
_v("white", false) // %109G
_v("darkgrey", false) // %110G
_a(0, 0, {InvertROCell:_n(undefined,23), FixedMatrixCell:_n(undefined,23)}, false) // %111G
_v([{areaSetAttr: [_]}], undefined) // %112G
_v([18], undefined) // %113G
_v([6], undefined) // %114G
_v(18, true) // %115G
_a(0, 0, {BasicHScrollBar:_n(undefined,23), BasicScrollBar:_n(undefined,23), Clickable:_n(undefined,23)}, false) // %116G
_v(1, true) // %117G
_v("vertical-center", false) // %118G
_v(-15, true) // %119G
_v([{pointerInArea: [_]}], undefined) // %120G
_v(0.6, false) // %121G
_v(0.3, false) // %122G
_v("lightgrey", false) // %123G
_v(3, false) // %124G
_a(0, 0, {BasicHScrollBarThumb:_n(undefined,23), BasicScrollBarThumb:_n(undefined,23), Draggable:_n(undefined,23), Clickable:_n(undefined,23)}, false) // %125G
_v([20], undefined) // %126G
_a(0, 0, {BasicScrollBar:_n(undefined,23), Clickable:_n(undefined,23), BasicVScrollBar:_n(undefined,23)}, false) // %127G
_v("horizontal-center", false) // %128G
_a(0, 0, {BasicScrollBarThumb:_n(undefined,23), Draggable:_n(undefined,23), Clickable:_n(undefined,23), BasicVScrollBarThumb:_n(undefined,23)}, false) // %129G
_v("top", true) // %130G
_v({type: "bottom"}, false) // %131G
_v({value: "Game Type", color: "white", fontFamily: "Roboto", fontWeight: 300}, false) // %132G
_a(2, 0, {background:_nf(undefined,64), text:_n(undefined,132)}, false) // %133G
_a(0, 0, {FixedMatrix:_n(undefined,23)}, false) // %134G
_v(40, true) // %135G
_v([{lightIndirectHoverColor: [_]}], undefined) // %136G
_f(1, 0, internalApply, [_n(undefined,136), _n(undefined,48)]) // %137G
_v([{darkIndirectHoverColor: [_]}], undefined) // %138G
_f(1, 0, internalApply, [_n(undefined,138), _n(undefined,48)]) // %139G
_v(["underline"], undefined) // %140G
_a(0, 0, {FixedMatrixCell:_n(undefined,23)}, false) // %141G
_f(0, 0, size, [_n(undefined,19)]) // %142G
_v([24], undefined) // %143G
_v([{content: [true], type: ["left"]}], undefined) // %144G
_v([{content: [true], type: ["right"]}], undefined) // %145G
_f(1, 0, minus, [_n(undefined,142), _n(undefined,80)]) // %146G
_v([32], undefined) // %147G
_f(2, 0, mul, [_n(undefined,146), _n(undefined,147)]) // %148G
_f(3, 0, plus, [_n(undefined,148), _n(undefined,147)]) // %149G
_v([16], undefined) // %150G
_v({value: "Board size", color: "white", fontFamily: "Roboto", fontWeight: 300}, false) // %151G
_a(2, 0, {background:_nf(undefined,64), text:_n(undefined,151)}, false) // %152G
_v([{point1: [{type: ["left"]}], point2: [{type: ["left"]}]}], undefined) // %153G
_v([{height: [_], width: [_]}], undefined) // %154G
_a(2, 0, {background:_nf(undefined,49), borderWidth:_n(undefined,106), borderStyle:_n(undefined,107), borderColor:_n(undefined,108)}, false) // %155G
_v("lightgrey", true) // %156G
_v(3, true) // %157G
_a(0, 0, {LTRContainer:_n(undefined,23)}, false) // %158G
_a(0, 0, {Invert:_n(undefined,23), FixedMatrix:_n(undefined,23)}, false) // %159G
_v([5], undefined) // %160G
_v([{msg: ["Invert"], recipient: ["start"]}], undefined) // %161G
_f(1, 0, internalApply, [_n(undefined,161), _n(undefined,0)])
_sp(0, 1) // %162G
_v([{column: [_]}], undefined) // %163G
_f(1, 0, internalApply, [_n(undefined,163), _n(undefined,0)])
_sp(0, 1) // %164G
_v([{row: [_]}], undefined) // %165G
_f(1, 0, internalApply, [_n(undefined,165), _n(undefined,0)])
_sp(0, 1) // %166G
_v([{msg: ["Revert"], recipient: ["start"]}], undefined) // %167G
_f(1, 0, internalApply, [_n(undefined,167), _n(undefined,0)])
_sp(0, 1) // %168G
_v([-1], undefined) // %169G
_rco(0, 0, [_n(undefined,12), _n(undefined,169)])
_sp(0, 1) // %170G
_v([{lightHoverColor: [_]}], undefined) // %171G
_f(1, 0, internalApply, [_n(undefined,171), _n(undefined,48)]) // %172G
_v([{lightColor: [_]}], undefined) // %173G
_f(1, 0, internalApply, [_n(undefined,173), _n(undefined,48)]) // %174G
_v({skew: {x: -40, y: -20}}, false) // %175G
_v({skew: {x: -20, y: -10}}, false) // %176G
_a(0, 0, {InvertCell:_n(undefined,23), InvertROCell:_n(undefined,23), FixedMatrixCell:_n(undefined,23)}, false) // %177G
_v(["Invert"], undefined) // %178G
_v(["start"], undefined) // %179G
_v({src: "image/ic_undo_48px.svg", size: "100%"}, false) // %180G
_a(0, 0, {IconButton:_n(undefined,23), DepressWhileMouseDown:_n(undefined,23), Clickable:_n(undefined,23)}, false) // %181G
_v([{msg: ["Revert"]}], undefined) // %182G
_v({src: "image/ic_settings_backup_restore_48px.svg", size: "100%"}, false) // %183G

initAreaTemplate()
_ac(undefined, undefined, 0, true) // area template create 1
_mq(0, 0, ["message"]) // %0L1
_par(0, 0, ["param"]) // %1L1
_w(1, 0, ["context","selectedSize"], _n(undefined,2),false)
_sp(0, 1) // %2L1<W>
_w(1, 0, ["context","selectedGameType"], _n(undefined,5),false)
_sp(0, 1) // %3L1<W>
_a(2, 0, {boardSizes:_n(undefined,4), gameType:_n(0,3)}, undefined) // %4L1
_f(3, 0, internalApply, [_n(0,4), _n(undefined,6)]) // %5L1
_f(4, 0, internalApply, [_n(0,2), _n(0,5)]) // %6L1
_f(5, 0, internalApply, [_n(undefined,3), _n(0,6)]) // %7L1
_w(1, 0, ["context","show"], _n(undefined,28),false)
_sp(0, 1) // %8L1<W>
_f(2, 0, internalApply, [_n(undefined,28), _n(0,8)]) // %9L1
_q(3, 0, [[_g(_n(0,9), true)]]) // %10L1
_f(1, 0, me, [])
_sp(0, 1) // %11L1
_a(2, 0, {type:_nf(undefined,29), element:_n(0,11)}, false) // %12L1
_a(3, 0, {point1:_nf(0,12), point2:_nf(undefined,30), equals:_nt(undefined,31)}, false) // %13L1
_m1(4, 0, _n(0,10), _n(0,13)) // %14L1
_a(2, 0, {type:_nf(undefined,32), element:_n(0,11)}, false) // %15L1
_a(3, 0, {point1:_nf(0,15), point2:_nf(undefined,33), equals:_nt(undefined,31)}, false) // %16L1
_m1(4, 0, _n(0,10), _n(0,16)) // %17L1
_d(2, 0, "introContainer", _n(0,11)) // %18L1
_a(3, 0, {type:_n(undefined,57), element:_n(0,18)}, false) // %19L1
_a(4, 0, {point1:_n(0,19), point2:_n(undefined,30), equals:_nt(undefined,60)}, false) // %20L1
_f(2, 0, internalApply, [_n(undefined,42), _n(0,8)]) // %21L1
_q(3, 0, [[_g(_n(0,21), true)]]) // %22L1
_m1(4, 0, _n(0,22), _n(0,13)) // %23L1
_m1(4, 0, _n(0,22), _n(0,16)) // %24L1
_q(6, 0, [[_g(_n(0,7), false)]]) // %25L1
_m1(7, 0, _n(0,25), _n(undefined,76)) // %26L1
_w(1, 0, ["context","selectedConfiguration"], _n(undefined,2),false)
_sp(0, 1) // %27L1<W>
_d(2, 0, "gameContainer", _n(0,11))
_sp(0, 1) // %28L1
_d(3, 0, "game", _n(0,28))
_sp(0, 1) // %29L1
_p(4, 0, 1, _n(0,29))
_sp(0, 1) // %30L1<W>
_p(4, 0, 2, _n(0,29))
_sp(0, 1) // %31L1<W>
_f(2, 0, internalApply, [_n(undefined,20), _n(0,2)])
_sp(0, 1) // %32L1
_f(2, 0, internalApply, [_n(undefined,21), _n(0,2)])
_sp(0, 1) // %33L1
_f(3, 0, minus, [_n(undefined,114), _n(0,33)]) // %34L1
_f(4, 0, mul, [_n(0,34), _n(undefined,113)]) // %35L1
_f(5, 0, div, [_n(0,35), _n(undefined,81)]) // %36L1
_f(3, 0, minus, [_n(undefined,114), _n(0,32)]) // %37L1
_f(4, 0, mul, [_n(0,37), _n(undefined,113)]) // %38L1
_f(5, 0, div, [_n(0,38), _n(undefined,81)]) // %39L1
_q(4, 0, [[_g(_n(0,5), false)]]) // %40L1
_m1(5, 0, _n(0,40), _n(undefined,98)) // %41L1
_d(2, 0, "settingsContainer", _n(0,11)) // %42L1
_a(3, 0, {type:_n(undefined,57), element:_n(0,42)}, false) // %43L1
_a(4, 0, {point1:_n(0,43), point2:_n(undefined,30), equals:_nt(undefined,60)}, false) // %44L1
_f(2, 0, internalApply, [_n(undefined,62), _n(0,8)]) // %45L1
_q(3, 0, [[_g(_n(0,45), true)]]) // %46L1
_m1(4, 0, _n(0,46), _n(0,13)) // %47L1
_m1(4, 0, _n(0,46), _n(0,16)) // %48L1
_d(2, 0, "oneCm", _n(0,11)) // %49L1
_p(3, 0, 3, _n(0,49)) // %50L1
_f(4, 0, round, [_n(0,50)]) // %51L1
_f(5, 0, mul, [_n(undefined,160), _n(0,51)]) // %52L1
_f(6, 0, plus, [_n(0,52), _n(undefined,160)]) // %53L1
_q(2, 0, [[_g(_n(0,3), "flip1")], [_g(_n(0,3), "flip2")]])
_sp(0, 1) // %54L1
_rco(3, 0, [_n(undefined,12), _n(0,33)])
_sp(0, 1) // %55L1
_f(4, 0, sequence, [_n(0,55)])
_sp(0, 1) // %56L1
_f(5, 0, mul, [_n(0,56), _n(0,32)])
_sp(0, 1) // %57L1
_f(3, 0, minus, [_n(0,32), _n(undefined,80)])
_sp(0, 1) // %58L1
_q(2, 0, [[_g(_n(0,3), "flip2")]])
_sp(0, 1) // %59L1
_f(5, 0, plus, [_n(0,51), _n(undefined,12)]) // %60L1
_f(4, 0, mul, [_n(0,58), _n(undefined,12)]) // %61L1
_f(5, 0, plus, [_n(0,61), _n(undefined,81)]) // %62L1
_f(2, 0, internalApply, [_n(undefined,9), _n(0,27)])
_sp(0, 1) // %63L1
_cnp({"App":1})
_ae(1, _n(undefined,22), undefined, undefined, {"0":_n(undefined,24)}) // area template expr 1
_ac(1, "oneCm", 0, true) // area template create 2
_mq(0, 0, ["message"]) // %0L2
_par(0, 0, ["param"]) // %1L2
_f(1, 0, displayWidth, [_n(undefined,25), _n(undefined,2)]) // %2L2
_cnp(undefined)
_ae(2, _n(undefined,25), undefined, undefined, {"3":_n(0,2)}) // area template expr 2
_ac(1, "introContainer", 0, true) // area template create 3
_mq(0, 0, ["message"]) // %0L3
_par(0, 0, ["param"]) // %1L3
_f(1, 0, me, []) // %2L3
_a(2, 0, {type:_n(undefined,55), element:_n(0,2)}, false) // %3L3
_a(3, 0, {point1:_n(0,3), point2:_n(undefined,33), min:_n(undefined,56)}, false) // %4L3
_a(2, 0, {type:_n(undefined,57), element:_n(0,2)}, false) // %5L3
_a(3, 0, {point1:_n(undefined,33), point2:_n(0,5), min:_n(undefined,56)}, false) // %6L3
_cnp({"Intro":1,"LTRContainer":2})
_ae(3, _n(undefined,26), {anchorLeftToEmbedding:_n(1,14), anchorLRightToEmbedding:_n(1,17), top:_n(undefined,31), bottom:_n(undefined,31), stableWidth:_n(undefined,34)}, undefined, {"0":_n(undefined,27)}) // area template expr 3
_ac(3, "forwardButton", 0, true) // area template create 4
_mq(0, 0, ["message"])
_sp(0, 1) // %0L4
_par(0, 0, ["param"]) // %1L4
_w(1, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %2L4<W>
_q(2, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %3L4
_m1(3, 0, _n(0,3), _n(undefined,38)) // %4L4
_a(4, 0, {image:_n(undefined,35), filter:_n(undefined,36), padding:_nf(0,4)}, false) // %5L4
_f(1, 0, internalApply, [_n(undefined,41), _n(0,0)])
_sp(0, 1) // %6L4
_q(2, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %7L4
_f(1, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %8L4
_m1(3, 0, _n(0,7), _n(0,8))
_sp(0, 1) // %9L4
_m1(3, 0, _n(0,7), _n(0,2))
_sp(0, 1) // %10L4<W>
_m1(3, 0, _n(0,7), _n(undefined,23))
_sp(0, 1) // %11L4
_m1(3, 0, _n(0,3), _n(undefined,45))
_sp(0, 1) // %12L4
_m1(3, 0, _n(0,3), _n(0,2))
_sp(0, 1) // %13L4<W>
_m1(3, 0, _n(0,3), _n(undefined,37))
_sp(0, 1) // %14L4
_cnp({"NextContainer":1,"IconButton":2,"DepressWhileMouseDown":3,"Clickable":4})
_ae(4, _n(0,5), {top:_n(undefined,40), right:_n(undefined,40), width:_n(undefined,40), height:_n(undefined,40)}, undefined, {"0":_n(undefined,39)}) // area template expr 4
_aw(4, "onClick", _n(0,6), undefined, {switch:_tm(_n(2,8), _n(undefined,42), 3)}, undefined, undefined, 2)
_aw(4, "onClickableMouseDown", _n(0,9), undefined, {selected:_tm(_n(0,10), _n(0,11), 5)}, undefined, undefined, 4)
_aw(4, "onClickableMouseUp", _n(0,12), undefined, {selected:_tm(_n(0,13), _n(0,14), 5)}, undefined, undefined, 4)
_ac(3, "intro", 0, true) // area template create 5
_mq(0, 0, ["message"]) // %0L5
_par(0, 0, ["param"]) // %1L5
_cnp(undefined)
_ae(5, _n(undefined,52), {"horizontal-center":_n(undefined,31), top:_n(undefined,53), bottom:_n(undefined,40), preferredWidth:_n(undefined,54), leftInsideEmbedding:_n(1,4), rightInsideEmbedding:_n(1,6)}, undefined, undefined) // area template expr 5
_ac(1, "settingsContainer", 0, true) // area template create 6
_mq(0, 0, ["message"]) // %0L6
_par(0, 0, ["param"]) // %1L6
_f(1, 0, me, [])
_sp(0, 1) // %2L6
_d(2, 0, "boardSize", _n(0,2)) // %3L6
_a(3, 0, {type:_n(undefined,67), element:_n(0,3)}, false) // %4L6
_a(4, 0, {point1:_n(0,4), point2:_n(undefined,68), equals:_nt(undefined,71)}, false) // %5L6
_d(3, 0, "configText", _n(0,2)) // %6L6
_a(4, 0, {type:_n(undefined,67), element:_n(0,6)}, false) // %7L6
_a(5, 0, {point1:_n(0,7), point2:_n(undefined,68), equals:_nt(undefined,71)}, false) // %8L6
_a(2, 0, {type:_nf(undefined,75), element:_n(0,2)}, false) // %9L6
_a(2, 0, {element:_n(0,2), type:_n(undefined,17)}, undefined)
_sp(0, 1) // %10L6
_d(2, 0, "gameTypeText", _n(0,2)) // %11L6
_a(3, 0, {type:_n(undefined,67), element:_n(0,11)}, false) // %12L6
_a(4, 0, {point1:_n(0,12), point2:_n(undefined,68), equals:_nt(undefined,71)}, false) // %13L6
_d(2, 0, "gameType", _n(0,2)) // %14L6
_a(3, 0, {type:_n(undefined,67), element:_n(0,14)}, false) // %15L6
_a(4, 0, {point1:_n(0,15), point2:_n(undefined,68), equals:_nt(undefined,71)}, false) // %16L6
_d(2, 0, "boardSizeText", _n(0,2)) // %17L6
_a(3, 0, {type:_n(undefined,67), element:_n(0,17)}, false) // %18L6
_a(4, 0, {point1:_n(0,18), point2:_n(undefined,68), equals:_nt(undefined,71)}, false) // %19L6
_cnp({"Settings":1,"LTRContainer":2})
_ae(6, _n(undefined,26), {left:_n(1,20), anchorLeftToEmbedding:_n(1,23), anchorLRightToEmbedding:_n(1,24), top:_n(undefined,31), bottom:_n(undefined,31), stableWidth:_n(undefined,34)}, undefined, {"0":_n(undefined,58)}) // area template expr 6
_ac(6, "backButton", 0, true) // area template create 7
_mq(0, 0, ["message"])
_sp(0, 1) // %0L7
_par(0, 0, ["param"]) // %1L7
_w(1, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %2L7<W>
_q(2, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %3L7
_m1(3, 0, _n(0,3), _n(undefined,38)) // %4L7
_a(4, 0, {image:_n(undefined,61), filter:_n(undefined,36), padding:_nf(0,4)}, false) // %5L7
_f(1, 0, internalApply, [_n(undefined,41), _n(0,0)])
_sp(0, 1) // %6L7
_q(2, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %7L7
_f(1, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %8L7
_m1(3, 0, _n(0,7), _n(0,8))
_sp(0, 1) // %9L7
_m1(3, 0, _n(0,7), _n(0,2))
_sp(0, 1) // %10L7<W>
_m1(3, 0, _n(0,7), _n(undefined,23))
_sp(0, 1) // %11L7
_m1(3, 0, _n(0,3), _n(undefined,45))
_sp(0, 1) // %12L7
_m1(3, 0, _n(0,3), _n(0,2))
_sp(0, 1) // %13L7<W>
_m1(3, 0, _n(0,3), _n(undefined,37))
_sp(0, 1) // %14L7
_cnp({"NextContainer":1,"IconButton":2,"DepressWhileMouseDown":3,"Clickable":4})
_ae(7, _n(0,5), {top:_n(undefined,40), left:_n(undefined,40), width:_n(undefined,40), height:_n(undefined,40)}, undefined, {"0":_n(undefined,39)}) // area template expr 7
_aw(7, "onClick", _n(0,6), undefined, {switch:_tm(_n(2,8), _n(undefined,28), 3)}, undefined, undefined, 2)
_aw(7, "onClickableMouseDown", _n(0,9), undefined, {selected:_tm(_n(0,10), _n(0,11), 5)}, undefined, undefined, 4)
_aw(7, "onClickableMouseUp", _n(0,12), undefined, {selected:_tm(_n(0,13), _n(0,14), 5)}, undefined, undefined, 4)
_ac(6, "forwardButton", 0, true) // area template create 8
_mq(0, 0, ["message"])
_sp(0, 1) // %0L8
_par(0, 0, ["param"]) // %1L8
_w(1, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %2L8<W>
_q(2, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %3L8
_m1(3, 0, _n(0,3), _n(undefined,38)) // %4L8
_a(4, 0, {image:_n(undefined,35), filter:_n(undefined,36), padding:_nf(0,4)}, false) // %5L8
_f(1, 0, internalApply, [_n(undefined,41), _n(0,0)])
_sp(0, 1) // %6L8
_q(2, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %7L8
_f(1, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %8L8
_m1(3, 0, _n(0,7), _n(0,8))
_sp(0, 1) // %9L8
_m1(3, 0, _n(0,7), _n(0,2))
_sp(0, 1) // %10L8<W>
_m1(3, 0, _n(0,7), _n(undefined,23))
_sp(0, 1) // %11L8
_m1(3, 0, _n(0,3), _n(undefined,45))
_sp(0, 1) // %12L8
_m1(3, 0, _n(0,3), _n(0,2))
_sp(0, 1) // %13L8<W>
_m1(3, 0, _n(0,3), _n(undefined,37))
_sp(0, 1) // %14L8
_cnp({"NextContainer":1,"IconButton":2,"DepressWhileMouseDown":3,"Clickable":4})
_ae(8, _n(0,5), {top:_n(undefined,40), right:_n(undefined,40), width:_n(undefined,40), height:_n(undefined,40)}, undefined, {"0":_n(undefined,39)}) // area template expr 8
_aw(8, "onClick", _n(0,6), undefined, {switch:_tm(_n(2,8), _n(undefined,62), 3)}, undefined, undefined, 2)
_aw(8, "onClickableMouseDown", _n(0,9), undefined, {selected:_tm(_n(0,10), _n(0,11), 5)}, undefined, undefined, 4)
_aw(8, "onClickableMouseUp", _n(0,12), undefined, {selected:_tm(_n(0,13), _n(0,14), 5)}, undefined, undefined, 4)
_ac(6, "configText", 2, true) // area template create 9
_mq(0, 0, ["message"]) // %0L9
_par(0, 0, ["param"]) // %1L9
_aeq([[_g(_n(2,2), true)]])
_cnp(undefined)
_ae(9, _n(undefined,66), {left:_n(undefined,40), right:_n(undefined,40), height:_n(undefined,40), top:_n(1,5)}, undefined, undefined) // area template expr 9
_ac(6, "configurations", 2, true) // area template create 10
_mq(0, 0, ["message"])
_sp(0, 1) // %0L10
_par(0, 0, ["param"]) // %1L10
_f(3, 0, offset, [_n(undefined,15), _n(undefined,16)])
_sp(0, 1)
_se(3, 0) // %2L10
_f(4, 0, plus, [_n(0,2), _n(undefined,12)])
_sp(0, 1)
_se(4, 0) // %3L10
_f(3, 0, me, [])
_sp(0, 1) // %4L10
_d(7, 0, "items", _n(0,4))
_sp(0, 1) // %5L10
_f(8, 0, first, [_n(0,5)])
_sp(0, 1) // %6L10
_a(9, 0, {element:_n(0,6), type:_n(undefined,17)}, undefined)
_sp(0, 1) // %7L10
_f(8, 0, last, [_n(0,5)])
_sp(0, 1) // %8L10
_a(9, 0, {element:_n(0,8), type:_n(undefined,18)}, undefined)
_sp(0, 1) // %9L10
_f(10, 0, offset, [_n(0,7), _n(0,9)])
_sp(0, 1)
_se(10, 0) // %10L10
_f(11, 0, plus, [_n(0,10), _n(undefined,12)])
_sp(0, 1)
_se(11, 0) // %11L10
_f(12, 0, greaterThanOrEqual, [_n(0,3), _n(0,11)])
_sp(0, 1)
_se(12, 0) // %12L10
_q(13, 0, [[_g(_n(0,12), false)], [], [], []])
_se(13, 0) // %13L10
_a(9, 0, {element:_nt(0,6)}, true) // %14L10
_a(10, 0, {point2:_nt(0,14)}, true) // %15L10
_m(14, 0, _n(0,13), [_n(undefined,2), _n(undefined,73), _n(0,15), _n(undefined,74)])
_se(14, 0) // %16L10
_q(13, 0, [[_g(_n(0,12), false)]])
_sp(0, 1)
_se(13, 0) // %17L10
_d(14, 0, "scrollbar", _n(0,4)) // %18L10
_a(15, 0, {type:_nf(undefined,75), element:_n(0,18)}, false) // %19L10
_d(15, 0, "thumb", _n(0,18)) // %20L10
_a(16, 0, {type:_nf(undefined,75), element:_n(0,20)}, false) // %21L10
_a(17, 0, {point1:_nf(0,19), point2:_nf(0,21)}, false) // %22L10
_a(9, 0, {type:_nf(undefined,75), element:_n(0,6)}, false) // %23L10
_a(10, 0, {point1:_nf(undefined,68), point2:_nf(0,23)}, false) // %24L10
_f(12, 0, div, [_n(0,11), _n(0,3)])
_se(12, 0) // %25L10
_f(13, 0, uminus, [_n(0,25)])
_se(13, 0) // %26L10
_a(18, 0, {pair1:_nf(0,22), pair2:_nf(0,24), ratio:_nt(0,26)}, false)
_se(18, 0) // %27L10
_m1(19, 0, _n(0,17), _n(0,27))
_se(19, 0) // %28L10
_w(3, 0, ["context","wheelScrollStage"], _n(undefined,12),false)
_sp(0, 1) // %29L10<W>
_q(4, 0, [[_g(_n(0,29), o(1,2))]]) // %30L10
_w(3, 0, ["context","wheelOffset"], _n(undefined,2),false)
_sp(0, 1) // %31L10<W>
_a(4, 0, {point1:_nf(1,9), point2:_nf(undefined,68), equals:_nt(0,31)}, false) // %32L10
_m1(5, 0, _n(0,30), _n(0,32)) // %33L10
_f(3, 0, internalApply, [_n(undefined,78), _n(0,0)])
_sp(0, 1) // %34L10
_f(3, 0, offset, [_n(1,10), _n(undefined,15)])
_sp(0, 1)
_se(3, 0) // %35L10
_f(3, 0, internalApply, [_n(undefined,79), _n(0,0)])
_sp(0, 1) // %36L10
_f(4, 0, minus, [_n(0,35), _n(0,36)])
_sp(0, 1)
_se(4, 0) // %37L10
_f(4, 0, equal, [_n(0,29), _n(undefined,81)])
_sp(0, 1) // %38L10
_m1(14, 0, _n(0,17), _n(undefined,23))
_sp(0, 1)
_se(14, 0) // %39L10
_a(15, 0, {ConfigurationListItem:_n(undefined,23), Draggable:_n(0,39), Clickable:_n(0,39), WheelScroll:_n(0,39)}, false)
_se(15, 0) // %40L10
_q(13, 0, [[_g(_n(0,12), false)], []])
_se(13, 0) // %41L10
_m(14, 0, _n(0,41), [_n(undefined,83), _n(undefined,84)])
_se(14, 0) // %42L10
_m1(14, 0, _n(0,17), _n(undefined,15))
_sp(0, 1)
_se(14, 0) // %43L10
_m1(14, 0, _n(0,17), _n(undefined,86))
_se(14, 0) // %44L10
_a(4, 0, {type:_nf(undefined,75), element:_n(0,4)}, false) // %45L10
_a(4, 0, {element:_n(0,4), type:_n(undefined,17)}, undefined)
_sp(0, 1) // %46L10
_m1(14, 0, _n(0,17), _n(undefined,80))
_sp(0, 1)
_se(14, 0) // %47L10
_m1(14, 0, _n(0,17), _n(undefined,81))
_sp(0, 1)
_se(14, 0) // %48L10
_m1(14, 0, _n(0,17), _n(undefined,12))
_sp(0, 1)
_se(14, 0) // %49L10
_f(12, 0, div, [_n(0,3), _n(0,11)])
_se(12, 0) // %50L10
_f(13, 0, mul, [_n(0,50), _n(0,3)])
_se(13, 0) // %51L10
_f(14, 0, max, [_n(0,51), _n(undefined,126)])
_se(14, 0) // %52L10
_aeq([[_g(_n(2,2), true)]])
_cnp({"Configurations":1,"BasicListInAreaWithScrollbar":2,"BasicListInArea":3,"WheelScroll":4})
_acc(10, {"items":{data:_n(2,7),partner:undefined}})
_ae(10, undefined, {left:_n(undefined,40), right:_n(undefined,40), bottom:_n(undefined,40), top:_n(1,8), firstChild:_n(0,16), firstChildTopOppositeThumb:_n(0,28), minHeightZero:_n(2,26), minWidthZero:_n(undefined,77), jumpToLabel:_n(0,33)}, undefined, {"0":_n(undefined,72)}) // area template expr 10
_aw(10, "blockWheelEvt", _n(0,34), _n(undefined,37), {}, undefined, undefined, 5)
_aw(10, "onWheel", _n(0,34), undefined, {setWheelOffset:_tm(_n(0,31), _n(0,37), 5),initWheelScroll:_tm(_n(0,29), _n(undefined,80), 5)}, undefined, {setWheelOffset:_tm(_n(0,29), _n(undefined,81), 5)}, 4)
_aw(10, "onEndOfSequence", _n(0,38), undefined, {setWheelOffset:_tm(_n(0,29), _n(undefined,12), 6)}, undefined, undefined, 5)
_ac(10, "items", 6, true) // area template create 11
_mq(0, 0, ["message"])
_sp(0, 1) // %0L11
_par(0, 0, ["param"]) // %1L11
_f(7, 0, internalApply, [_n(undefined,8), _n(0,1)]) // %2L11
_f(8, 0, internalApply, [_n(undefined,7), _n(0,2)]) // %3L11
_w(7, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %4L11<W>
_m1(14, 0, _n(1,17), _n(0,4))
_sp(0, 1)
_se(14, 0) // %5L11<W>
_m1(15, 0, _n(1,17), _n(0,5))
_sp(0, 1)
_se(15, 0) // %6L11
_q(16, 0, [[_g(_n(1,12), false), _g(_n(0,6), true), _g(_n(1,39), true)]])
_se(16, 0) // %7L11
_w(7, 0, ["context","mouseDownY"], _n(undefined,12),true)
_sp(0, 1) // %8L11<W>
_m1(14, 0, _n(1,17), _n(0,8))
_sp(0, 1)
_se(14, 0) // %9L11<W>
_a(15, 0, {point1:_nf(1,43), point2:_nf(undefined,85), equals:_nt(0,9), priority:_nt(1,44)}, false)
_se(15, 0) // %10L11
_m1(17, 0, _n(0,7), _n(0,10))
_se(17, 0) // %11L11
_w(7, 0, ["context","wheelScrollStage"], _n(undefined,12),false)
_sp(0, 1) // %12L11<W>
_m1(14, 0, _n(1,17), _n(0,12))
_sp(0, 1)
_se(14, 0) // %13L11<W>
_q(15, 0, [[_g(_n(1,12), false), _g(_n(0,13), o(1,2))]])
_se(15, 0) // %14L11
_w(7, 0, ["context","wheelOffset"], _n(undefined,2),false)
_sp(0, 1) // %15L11<W>
_m1(14, 0, _n(1,17), _n(0,15))
_sp(0, 1)
_se(14, 0) // %16L11<W>
_a(15, 0, {point1:_nf(1,45), point2:_nf(undefined,68), equals:_nt(0,16)}, false)
_se(15, 0) // %17L11
_m1(16, 0, _n(0,14), _n(0,17))
_se(16, 0) // %18L11
_f(7, 0, prev, []) // %19L11
_a(8, 0, {type:_n(undefined,67), element:_n(0,19)}, false) // %20L11
_a(9, 0, {point1:_n(0,20), point2:_n(undefined,68), equals:_n(undefined,31)}, false) // %21L11
_q(16, 0, [[_g(_n(1,12), false), _g(_n(0,6), false), _g(_n(1,39), true)]])
_sp(0, 1)
_se(16, 0) // %22L11
_f(7, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %23L11
_m1(17, 0, _n(0,22), _n(0,23))
_sp(0, 1)
_se(17, 0) // %24L11
_m1(17, 0, _n(0,22), _n(0,9))
_sp(0, 1)
_se(17, 0) // %25L11<W>
_f(15, 0, offset, [_n(1,43), _n(undefined,87)])
_sp(0, 1)
_se(15, 0) // %26L11
_m1(17, 0, _n(0,22), _n(0,26))
_sp(0, 1)
_se(17, 0) // %27L11
_q(15, 0, [[_g(_n(1,12), false), _g(_n(0,5), false)]])
_sp(0, 1)
_se(15, 0) // %28L11
_m1(16, 0, _n(0,28), _n(0,23))
_sp(0, 1)
_se(16, 0) // %29L11
_m1(16, 0, _n(0,28), _n(0,5))
_sp(0, 1)
_se(16, 0) // %30L11<W>
_m1(16, 0, _n(0,28), _n(undefined,23))
_sp(0, 1)
_se(16, 0) // %31L11
_q(15, 0, [[_g(_n(1,12), false), _g(_n(0,5), true)]])
_sp(0, 1)
_se(15, 0) // %32L11
_m1(16, 0, _n(0,32), _n(undefined,45))
_sp(0, 1)
_se(16, 0) // %33L11
_m1(16, 0, _n(0,32), _n(0,5))
_sp(0, 1)
_se(16, 0) // %34L11<W>
_m1(16, 0, _n(0,32), _n(undefined,37))
_sp(0, 1)
_se(16, 0) // %35L11
_f(7, 0, internalApply, [_n(undefined,78), _n(0,0)])
_sp(0, 1) // %36L11
_m1(14, 0, _n(1,17), _n(0,36))
_sp(0, 1)
_se(14, 0) // %37L11
_m1(15, 0, _n(1,17), _n(0,16))
_sp(0, 1)
_se(15, 0) // %38L11<W>
_f(7, 0, offset, [_n(1,46), _n(undefined,15)])
_sp(0, 1)
_se(7, 0) // %39L11
_f(7, 0, internalApply, [_n(undefined,79), _n(0,0)])
_sp(0, 1) // %40L11
_f(8, 0, minus, [_n(0,39), _n(0,40)])
_sp(0, 1)
_se(8, 0) // %41L11
_m1(14, 0, _n(1,17), _n(0,41))
_sp(0, 1)
_se(14, 0) // %42L11
_m1(15, 0, _n(1,17), _n(0,13))
_sp(0, 1)
_se(15, 0) // %43L11<W>
_f(15, 0, equal, [_n(0,13), _n(undefined,81)])
_sp(0, 1)
_se(15, 0) // %44L11
_m1(16, 0, _n(1,17), _n(0,44))
_sp(0, 1)
_se(16, 0) // %45L11
_f(8, 0, internalApply, [_n(undefined,91), _n(0,2)]) // %46L11
_f(9, 0, first, [_n(0,46)]) // %47L11
_a(10, 0, {value:_nf(0,47), color:_n(undefined,92), fontFamily:_n(undefined,93), fontWeight:_n(undefined,94)}, false) // %48L11
_a(11, 0, {background:_nf(undefined,89), padding:_n(undefined,90), text:_n(0,48)}, false) // %49L11
_q(9, 0, [[_g(_n(0,3), false)]]) // %50L11
_m1(10, 0, _n(0,50), _n(undefined,98)) // %51L11
_cnp({"ConfigurationListItem":1,"Draggable":2,"Clickable":3,"WheelScroll":4})
_ae(11, undefined, {height:_n(undefined,82), right:_n(1,42), topDrag:_n(0,11), leftDrag:_n(undefined,77), jumpToLabel:_n(0,18), left:_n(undefined,31), itemOrder:_n(0,21)}, undefined, {"0":_n(1,40)}) // area template expr 11
_aw(11, "onDraggableMouseDown", _n(0,24), undefined, {writeY:_tm(_n(0,25), _n(0,27), 19)}, undefined, undefined, 18)
_aw(11, "onClickableMouseDown", _n(0,29), undefined, {selected:_tm(_n(0,30), _n(0,31), 18)}, undefined, undefined, 17)
_aw(11, "onClickableMouseUp", _n(0,33), undefined, {selected:_tm(_n(0,34), _n(0,35), 18)}, undefined, undefined, 17)
_aw(11, "onWheel", _n(0,37), undefined, {setWheelOffset:_tm(_n(0,38), _n(0,42), 16),initWheelScroll:_tm(_n(0,43), _n(1,47), 16)}, undefined, {setWheelOffset:_tm(_n(0,43), _n(1,48), 16)}, 15)
_aw(11, "onEndOfSequence", _n(0,45), undefined, {setWheelOffset:_tm(_n(0,43), _n(1,49), 18)}, undefined, undefined, 17)
_ac(11, "text", 6, true) // area template create 12
_mq(0, 0, ["message"]) // %0L12
_par(0, 0, ["param"]) // %1L12
_cnp(undefined)
_ae(12, _n(1,49), {top:_n(undefined,90), left:_n(undefined,31), height:_n(undefined,95), right:_n(undefined,31)}, undefined, undefined) // area template expr 12
_ac(11, "configurations", 6, true) // area template create 13
_mq(0, 0, ["message"])
_sp(0, 1) // %0L13
_par(0, 0, ["param"]) // %1L13
_f(7, 0, offset, [_n(undefined,10), _n(undefined,11)])
_sp(0, 1)
_se(7, 0) // %2L13
_f(8, 0, plus, [_n(0,2), _n(undefined,12)])
_sp(0, 1)
_se(8, 0) // %3L13
_f(7, 0, me, [])
_sp(0, 1) // %4L13
_d(10, 0, "items", _n(0,4))
_sp(0, 1) // %5L13
_f(11, 0, first, [_n(0,5)])
_sp(0, 1) // %6L13
_a(12, 0, {element:_n(0,6), type:_n(undefined,13)}, undefined)
_sp(0, 1) // %7L13
_f(11, 0, last, [_n(0,5)])
_sp(0, 1) // %8L13
_a(12, 0, {element:_n(0,8), type:_n(undefined,14)}, undefined)
_sp(0, 1) // %9L13
_f(13, 0, offset, [_n(0,7), _n(0,9)])
_sp(0, 1)
_se(13, 0) // %10L13
_f(14, 0, plus, [_n(0,10), _n(undefined,12)])
_sp(0, 1)
_se(14, 0) // %11L13
_f(15, 0, greaterThanOrEqual, [_n(0,3), _n(0,11)])
_sp(0, 1)
_se(15, 0) // %12L13
_q(16, 0, [[_g(_n(0,12), false)]])
_sp(0, 1)
_se(16, 0) // %13L13
_m1(17, 0, _n(0,13), _n(undefined,2))
_se(17, 0) // %14L13
_d(17, 0, "scrollbar", _n(0,4)) // %15L13
_a(18, 0, {type:_nf(undefined,29), element:_n(0,15)}, false) // %16L13
_d(18, 0, "thumb", _n(0,15)) // %17L13
_a(19, 0, {type:_nf(undefined,29), element:_n(0,17)}, false) // %18L13
_a(20, 0, {point1:_nf(0,16), point2:_nf(0,18)}, false) // %19L13
_a(12, 0, {type:_nf(undefined,29), element:_n(0,6)}, false) // %20L13
_a(13, 0, {point1:_nf(undefined,30), point2:_nf(0,20)}, false) // %21L13
_f(15, 0, div, [_n(0,11), _n(0,3)])
_se(15, 0) // %22L13
_f(16, 0, uminus, [_n(0,22)])
_se(16, 0) // %23L13
_a(21, 0, {pair1:_nf(0,19), pair2:_nf(0,21), ratio:_nt(0,23)}, false)
_se(21, 0) // %24L13
_m1(22, 0, _n(0,13), _n(0,24))
_se(22, 0) // %25L13
_f(7, 0, internalApply, [_n(undefined,78), _n(0,0)])
_sp(0, 1) // %26L13
_m1(17, 0, _n(0,13), _n(undefined,23))
_sp(0, 1)
_se(17, 0) // %27L13
_a(18, 0, {SimpleInvert:_n(undefined,23), FixedMatrix:_n(undefined,23), Draggable:_n(0,27), Clickable:_n(0,27), WheelScroll:_n(0,27)}, false)
_se(18, 0) // %28L13
_q(16, 0, [[_g(_n(0,12), false)], []])
_se(16, 0) // %29L13
_m(17, 0, _n(0,29), [_n(undefined,83), _n(undefined,84)])
_se(17, 0) // %30L13
_m1(17, 0, _n(0,13), _n(undefined,10))
_sp(0, 1)
_se(17, 0) // %31L13
_m1(17, 0, _n(0,13), _n(undefined,86))
_se(17, 0) // %32L13
_a(8, 0, {type:_nf(undefined,75), element:_n(0,4)}, false) // %33L13
_a(8, 0, {element:_n(0,4), type:_n(undefined,17)}, undefined)
_sp(0, 1) // %34L13
_m1(17, 0, _n(0,13), _n(undefined,80))
_sp(0, 1)
_se(17, 0) // %35L13
_m1(17, 0, _n(0,13), _n(undefined,81))
_sp(0, 1)
_se(17, 0) // %36L13
_m1(17, 0, _n(0,13), _n(undefined,12))
_sp(0, 1)
_se(17, 0) // %37L13
_f(15, 0, div, [_n(0,3), _n(0,11)])
_se(15, 0) // %38L13
_f(16, 0, mul, [_n(0,38), _n(0,3)])
_se(16, 0) // %39L13
_f(17, 0, max, [_n(0,39), _n(undefined,126)])
_se(17, 0) // %40L13
_cnp({"BasicListInAreaWithScrollbar":1,"BasicListInArea":2})
_acc(13, {"items":{data:_n(1,3),partner:undefined}})
_ae(13, undefined, {top:_n(undefined,40), left:_n(undefined,40), right:_n(undefined,40), height:_n(undefined,97), firstChild:_n(0,14), firstChildTopOppositeThumb:_n(0,25), minHeightZero:_n(undefined,77), minWidthZero:_n(1,51)}, undefined, {"0":_n(undefined,96)}) // area template expr 13
_aw(13, "blockWheelEvt", _n(0,26), _n(undefined,37), {}, undefined, undefined, 9)
_ac(13, "items", 9, true) // area template create 14
_mq(0, 0, ["message"])
_sp(0, 1) // %0L14
_par(0, 0, ["param"])
_sp(0, 1) // %1L14
_f(10, 0, internalApply, [_n(undefined,8), _n(0,1)])
_sp(0, 1) // %2L14
_f(11, 0, internalApply, [_n(undefined,9), _n(0,2)])
_sp(0, 1) // %3L14
_f(11, 0, equal, [_n(5,27), _n(0,2)]) // %4L14
_q(12, 0, [[_g(_n(0,4), true)], []]) // %5L14
_m(13, 0, _n(0,5), [_n(undefined,99), _n(undefined,100)]) // %6L14
_q(12, 0, [[_g(_n(0,4), true)]]) // %7L14
_m1(13, 0, _n(0,7), _n(undefined,102)) // %8L14
_a(14, 0, {borderStyle:_nf(0,6), background:_nf(0,8), borderRadius:_n(undefined,56), borderColor:_nf(undefined,89), borderWidth:_n(undefined,90)}, false) // %9L14
_w(10, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %10L14<W>
_m1(17, 0, _n(1,13), _n(0,10))
_sp(0, 1)
_se(17, 0) // %11L14<W>
_m1(18, 0, _n(1,13), _n(0,11))
_sp(0, 1)
_se(18, 0) // %12L14
_q(19, 0, [[_g(_n(1,12), false), _g(_n(0,12), true), _g(_n(1,27), true)]])
_se(19, 0) // %13L14
_w(10, 0, ["context","mouseDownX"], _n(undefined,12),true)
_sp(0, 1) // %14L14<W>
_m1(17, 0, _n(1,13), _n(0,14))
_sp(0, 1)
_se(17, 0) // %15L14<W>
_a(18, 0, {point1:_nf(1,31), point2:_nf(undefined,103), equals:_nt(0,15), priority:_nt(1,32)}, false)
_se(18, 0) // %16L14
_m1(20, 0, _n(0,13), _n(0,16))
_se(20, 0) // %17L14
_w(10, 0, ["context","wheelScrollStage"], _n(undefined,12),false)
_sp(0, 1) // %18L14<W>
_m1(17, 0, _n(1,13), _n(0,18))
_sp(0, 1)
_se(17, 0) // %19L14<W>
_q(18, 0, [[_g(_n(1,12), false), _g(_n(0,19), o(1,2))]])
_se(18, 0) // %20L14
_w(10, 0, ["context","wheelOffset"], _n(undefined,2),false)
_sp(0, 1) // %21L14<W>
_m1(17, 0, _n(1,13), _n(0,21))
_sp(0, 1)
_se(17, 0) // %22L14<W>
_a(18, 0, {point1:_nf(1,33), point2:_nf(undefined,68), equals:_nt(0,22)}, false)
_se(18, 0) // %23L14
_m1(19, 0, _n(0,20), _n(0,23))
_se(19, 0) // %24L14
_f(10, 0, prev, []) // %25L14
_a(11, 0, {type:_n(undefined,57), element:_n(0,25)}, false) // %26L14
_a(12, 0, {point1:_n(0,26), point2:_n(undefined,30), equals:_n(undefined,104)}, false) // %27L14
_f(10, 0, internalApply, [_n(undefined,41), _n(0,0)])
_sp(0, 1) // %28L14
_q(19, 0, [[_g(_n(1,12), false), _g(_n(0,12), false), _g(_n(1,27), true)]])
_sp(0, 1)
_se(19, 0) // %29L14
_f(10, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %30L14
_m1(20, 0, _n(0,29), _n(0,30))
_sp(0, 1)
_se(20, 0) // %31L14
_m1(20, 0, _n(0,29), _n(0,15))
_sp(0, 1)
_se(20, 0) // %32L14<W>
_f(18, 0, offset, [_n(1,31), _n(undefined,105)])
_sp(0, 1)
_se(18, 0) // %33L14
_m1(20, 0, _n(0,29), _n(0,33))
_sp(0, 1)
_se(20, 0) // %34L14
_q(18, 0, [[_g(_n(1,12), false), _g(_n(0,11), false)]])
_sp(0, 1)
_se(18, 0) // %35L14
_m1(19, 0, _n(0,35), _n(0,30))
_sp(0, 1)
_se(19, 0) // %36L14
_m1(19, 0, _n(0,35), _n(0,11))
_sp(0, 1)
_se(19, 0) // %37L14<W>
_m1(19, 0, _n(0,35), _n(undefined,23))
_sp(0, 1)
_se(19, 0) // %38L14
_q(18, 0, [[_g(_n(1,12), false), _g(_n(0,11), true)]])
_sp(0, 1)
_se(18, 0) // %39L14
_m1(19, 0, _n(0,39), _n(undefined,45))
_sp(0, 1)
_se(19, 0) // %40L14
_m1(19, 0, _n(0,39), _n(0,11))
_sp(0, 1)
_se(19, 0) // %41L14<W>
_m1(19, 0, _n(0,39), _n(undefined,37))
_sp(0, 1)
_se(19, 0) // %42L14
_f(10, 0, internalApply, [_n(undefined,78), _n(0,0)])
_sp(0, 1) // %43L14
_m1(17, 0, _n(1,13), _n(0,43))
_sp(0, 1)
_se(17, 0) // %44L14
_m1(18, 0, _n(1,13), _n(0,22))
_sp(0, 1)
_se(18, 0) // %45L14<W>
_f(10, 0, offset, [_n(1,34), _n(undefined,15)])
_sp(0, 1)
_se(10, 0) // %46L14
_f(10, 0, internalApply, [_n(undefined,79), _n(0,0)])
_sp(0, 1) // %47L14
_f(11, 0, minus, [_n(0,46), _n(0,47)])
_sp(0, 1)
_se(11, 0) // %48L14
_m1(17, 0, _n(1,13), _n(0,48))
_sp(0, 1)
_se(17, 0) // %49L14
_m1(18, 0, _n(1,13), _n(0,19))
_sp(0, 1)
_se(18, 0) // %50L14<W>
_f(18, 0, equal, [_n(0,19), _n(undefined,81)])
_sp(0, 1)
_se(18, 0) // %51L14
_m1(19, 0, _n(1,13), _n(0,51))
_sp(0, 1)
_se(19, 0) // %52L14
_cnp({"SimpleInvert":1,"FixedMatrix":2,"Draggable":3,"Clickable":4,"WheelScroll":5})
_acc(14, {"cells":{data:_n(0,3),partner:undefined}})
_ae(14, _n(0,9), {height:_n(undefined,97), width:_n(undefined,97), bottom:_n(1,30), topDrag:_n(undefined,77), leftDrag:_n(0,17), jumpToLabel:_n(0,24), top:_n(undefined,31), itemOrder:_n(0,27)}, undefined, {"0":_n(1,28)}) // area template expr 14
_aw(14, "onClick", _n(0,28), undefined, {updateSelectedConfiguration:_tm(_n(5,27), _n(0,2), 12),resetBoard:_tm(_n(5,30), _n(0,3), 12),clearHistory:_tm(_n(5,31), _n(undefined,2), 12),showInvertBoard:_tm(_n(5,8), _n(undefined,62), 12)}, undefined, undefined, 11)
_aw(14, "onDraggableMouseDown", _n(0,31), undefined, {writeX:_tm(_n(0,32), _n(0,34), 22)}, undefined, undefined, 21)
_aw(14, "onClickableMouseDown", _n(0,36), undefined, {selected:_tm(_n(0,37), _n(0,38), 21)}, undefined, undefined, 20)
_aw(14, "onClickableMouseUp", _n(0,40), undefined, {selected:_tm(_n(0,41), _n(0,42), 21)}, undefined, undefined, 20)
_aw(14, "onWheel", _n(0,44), undefined, {setWheelOffset:_tm(_n(0,45), _n(0,49), 19),initWheelScroll:_tm(_n(0,50), _n(1,35), 19)}, undefined, {setWheelOffset:_tm(_n(0,50), _n(1,36), 19)}, 18)
_aw(14, "onEndOfSequence", _n(0,52), undefined, {setWheelOffset:_tm(_n(0,50), _n(1,37), 21)}, undefined, undefined, 20)
_ac(14, "cells", 12, true) // area template create 15
_mq(0, 0, ["message"]) // %0L15
_par(0, 0, ["param"]) // %1L15
_f(13, 0, internalApply, [_n(undefined,8), _n(0,1)]) // %2L15
_q(14, 0, [[_g(_n(0,2), false)], [_g(_n(0,2), true)], []]) // %3L15
_m(15, 0, _n(0,3), [_n(undefined,109), _n(undefined,49), _n(undefined,110)]) // %4L15
_a(16, 0, {borderWidth:_n(undefined,106), borderStyle:_n(undefined,107), borderColor:_n(undefined,108), background:_nf(0,4)}, false) // %5L15
_f(13, 0, internalApply, [_n(undefined,112), _n(0,1)]) // %6L15
_f(14, 0, div, [_n(0,6), _n(6,32)]) // %7L15
_f(15, 0, floor, [_n(0,7)]) // %8L15
_f(16, 0, mul, [_n(0,8), _n(undefined,113)]) // %9L15
_f(17, 0, plus, [_n(0,9), _n(6,36)]) // %10L15
_f(14, 0, mod, [_n(0,6), _n(6,32)]) // %11L15
_f(15, 0, mul, [_n(0,11), _n(undefined,113)]) // %12L15
_f(16, 0, plus, [_n(0,12), _n(6,39)]) // %13L15
_cnp({"InvertROCell":1,"FixedMatrixCell":2})
_ae(15, _n(0,5), {top:_n(0,10), left:_n(0,13), height:_n(undefined,115), width:_n(undefined,115)}, undefined, {"0":_n(undefined,111)}) // area template expr 15
_ac(13, "scrollbar", 16, true) // area template create 16
_mq(0, 0, ["message"])
_sp(0, 1) // %0L16
_par(0, 0, ["param"]) // %1L16
_w(17, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %2L16<W>
_q(18, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %3L16
_f(17, 0, me, []) // %4L16
_d(18, 0, "thumb", _n(0,4)) // %5L16
_a(19, 0, {type:_nf(undefined,118), element:_n(0,5)}, false) // %6L16
_a(20, 0, {point1:_nf(0,6), point2:_nf(undefined,103), equals:_nt(undefined,31), priority:_nt(undefined,119)}, false) // %7L16
_m1(21, 0, _n(0,3), _n(0,7)) // %8L16
_q(18, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %9L16
_f(17, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %10L16
_m1(19, 0, _n(0,9), _n(0,10))
_sp(0, 1) // %11L16
_m1(19, 0, _n(0,9), _n(0,2))
_sp(0, 1) // %12L16<W>
_m1(19, 0, _n(0,9), _n(undefined,23))
_sp(0, 1) // %13L16
_m1(19, 0, _n(0,3), _n(undefined,45))
_sp(0, 1) // %14L16
_m1(19, 0, _n(0,3), _n(0,2))
_sp(0, 1) // %15L16<W>
_m1(19, 0, _n(0,3), _n(undefined,37))
_sp(0, 1) // %16L16
_a(18, 0, {type:_n(undefined,55), element:_n(0,4)}, false) // %17L16
_a(19, 0, {point1:_n(0,17), point2:_n(undefined,30), min:_n(undefined,31)}, false) // %18L16
_a(18, 0, {type:_n(undefined,57), element:_n(0,4)}, false) // %19L16
_a(19, 0, {point1:_n(undefined,33), point2:_n(0,19), min:_n(undefined,31)}, false) // %20L16
_aeq([[_g(_n(1,12), false)]])
_cnp({"BasicHScrollBar":1,"BasicScrollBar":2,"Clickable":3})
_ae(16, undefined, {bottom:_n(undefined,31), left:_n(undefined,31), right:_n(undefined,117), height:_n(undefined,56), moveScrollBar:_n(0,8)}, undefined, {"0":_n(undefined,116)}) // area template expr 16
_aw(16, "onClickableMouseDown", _n(0,11), undefined, {selected:_tm(_n(0,12), _n(0,13), 21)}, undefined, undefined, 20)
_aw(16, "onClickableMouseUp", _n(0,14), undefined, {selected:_tm(_n(0,15), _n(0,16), 21)}, undefined, undefined, 20)
_ac(16, "thumb", 16, true) // area template create 17
_mq(0, 0, ["message"])
_sp(0, 1) // %0L17
_par(0, 0, ["param"]) // %1L17
_f(17, 0, internalApply, [_n(undefined,120), _n(0,1)]) // %2L17
_w(17, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %3L17<W>
_f(18, 0, or, [_n(0,2), _n(0,3)]) // %4L17
_q(19, 0, [[_g(_n(0,4), true)], []]) // %5L17
_m(20, 0, _n(0,5), [_n(undefined,121), _n(undefined,122)]) // %6L17
_a(21, 0, {opacity:_nf(0,6), background:_n(undefined,123), borderRadius:_n(undefined,124)}, false) // %7L17
_q(18, 0, [[_g(_n(0,3), true)]]) // %8L17
_w(17, 0, ["context","mouseDownX"], _n(undefined,12),true)
_sp(0, 1) // %9L17<W>
_a(18, 0, {point1:_nf(undefined,10), point2:_nf(undefined,103), equals:_nt(0,9), priority:_nt(undefined,86)}, false) // %10L17
_m1(19, 0, _n(0,8), _n(0,10)) // %11L17
_q(18, 0, [[_g(_n(0,3), false)]])
_sp(0, 1) // %12L17
_f(17, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %13L17
_m1(19, 0, _n(0,12), _n(0,13))
_sp(0, 1) // %14L17
_m1(19, 0, _n(0,12), _n(0,9))
_sp(0, 1) // %15L17<W>
_f(17, 0, offset, [_n(undefined,10), _n(undefined,105)])
_sp(0, 1)
_se(17, 0) // %16L17
_m1(19, 0, _n(0,12), _n(0,16))
_sp(0, 1)
_se(19, 0) // %17L17
_q(18, 0, [[_g(_n(0,3), false)]])
_sp(0, 1) // %18L17
_m1(19, 0, _n(0,18), _n(0,13))
_sp(0, 1) // %19L17
_m1(19, 0, _n(0,18), _n(0,3))
_sp(0, 1) // %20L17<W>
_m1(19, 0, _n(0,18), _n(undefined,23))
_sp(0, 1) // %21L17
_q(18, 0, [[_g(_n(0,3), true)]])
_sp(0, 1) // %22L17
_m1(19, 0, _n(0,22), _n(undefined,45))
_sp(0, 1) // %23L17
_m1(19, 0, _n(0,22), _n(0,3))
_sp(0, 1) // %24L17<W>
_m1(19, 0, _n(0,22), _n(undefined,37))
_sp(0, 1) // %25L17
_cnp({"BasicHScrollBarThumb":1,"BasicScrollBarThumb":2,"Draggable":3,"Clickable":4})
_ae(17, _n(0,7), {left:_n(1,18), right:_n(1,20), top:_n(undefined,12), width:_n(2,40), bottom:_n(undefined,12), topDrag:_n(undefined,77), leftDrag:_n(0,11)}, undefined, {"0":_n(undefined,125)}) // area template expr 17
_aw(17, "onDraggableMouseDown", _n(0,14), undefined, {writeX:_tm(_n(0,15), _n(0,17), 21)}, undefined, undefined, 20)
_aw(17, "onClickableMouseDown", _n(0,19), undefined, {selected:_tm(_n(0,20), _n(0,21), 21)}, undefined, undefined, 20)
_aw(17, "onClickableMouseUp", _n(0,23), undefined, {selected:_tm(_n(0,24), _n(0,25), 21)}, undefined, undefined, 20)
_ac(10, "scrollbar", 13, true) // area template create 18
_mq(0, 0, ["message"])
_sp(0, 1) // %0L18
_par(0, 0, ["param"]) // %1L18
_w(14, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %2L18<W>
_q(15, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %3L18
_f(14, 0, me, []) // %4L18
_d(15, 0, "thumb", _n(0,4)) // %5L18
_a(16, 0, {type:_nf(undefined,128), element:_n(0,5)}, false) // %6L18
_a(17, 0, {point1:_nf(0,6), point2:_nf(undefined,85), equals:_nt(undefined,31), priority:_nt(undefined,119)}, false) // %7L18
_m1(18, 0, _n(0,3), _n(0,7)) // %8L18
_q(15, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %9L18
_f(14, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %10L18
_m1(16, 0, _n(0,9), _n(0,10))
_sp(0, 1) // %11L18
_m1(16, 0, _n(0,9), _n(0,2))
_sp(0, 1) // %12L18<W>
_m1(16, 0, _n(0,9), _n(undefined,23))
_sp(0, 1) // %13L18
_m1(16, 0, _n(0,3), _n(undefined,45))
_sp(0, 1) // %14L18
_m1(16, 0, _n(0,3), _n(0,2))
_sp(0, 1) // %15L18<W>
_m1(16, 0, _n(0,3), _n(undefined,37))
_sp(0, 1) // %16L18
_a(15, 0, {type:_n(undefined,130), element:_n(0,4)}, false) // %17L18
_a(16, 0, {point1:_n(0,17), point2:_n(undefined,68), min:_n(undefined,31)}, false) // %18L18
_a(15, 0, {type:_n(undefined,67), element:_n(0,4)}, false) // %19L18
_a(16, 0, {point1:_n(undefined,131), point2:_n(0,19), min:_n(undefined,31)}, false) // %20L18
_aeq([[_g(_n(1,12), false)]])
_cnp({"BasicScrollBar":1,"Clickable":2,"BasicVScrollBar":3})
_ae(18, undefined, {bottom:_n(undefined,117), right:_n(undefined,31), moveScrollBar:_n(0,8), top:_n(undefined,31), width:_n(undefined,56)}, undefined, {"0":_n(undefined,127)}) // area template expr 18
_aw(18, "onClickableMouseDown", _n(0,11), undefined, {selected:_tm(_n(0,12), _n(0,13), 18)}, undefined, undefined, 17)
_aw(18, "onClickableMouseUp", _n(0,14), undefined, {selected:_tm(_n(0,15), _n(0,16), 18)}, undefined, undefined, 17)
_ac(18, "thumb", 13, true) // area template create 19
_mq(0, 0, ["message"])
_sp(0, 1) // %0L19
_par(0, 0, ["param"]) // %1L19
_f(14, 0, internalApply, [_n(undefined,120), _n(0,1)]) // %2L19
_w(14, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %3L19<W>
_f(15, 0, or, [_n(0,2), _n(0,3)]) // %4L19
_q(16, 0, [[_g(_n(0,4), true)], []]) // %5L19
_m(17, 0, _n(0,5), [_n(undefined,121), _n(undefined,122)]) // %6L19
_a(18, 0, {opacity:_nf(0,6), background:_n(undefined,123), borderRadius:_n(undefined,124)}, false) // %7L19
_q(15, 0, [[_g(_n(0,3), true)]]) // %8L19
_w(14, 0, ["context","mouseDownY"], _n(undefined,12),true)
_sp(0, 1) // %9L19<W>
_a(15, 0, {point1:_nf(undefined,15), point2:_nf(undefined,85), equals:_nt(0,9), priority:_nt(undefined,86)}, false) // %10L19
_m1(16, 0, _n(0,8), _n(0,10)) // %11L19
_q(15, 0, [[_g(_n(0,3), false)]])
_sp(0, 1) // %12L19
_f(14, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %13L19
_m1(16, 0, _n(0,12), _n(0,13))
_sp(0, 1) // %14L19
_m1(16, 0, _n(0,12), _n(0,9))
_sp(0, 1) // %15L19<W>
_f(14, 0, offset, [_n(undefined,15), _n(undefined,87)])
_sp(0, 1)
_se(14, 0) // %16L19
_m1(16, 0, _n(0,12), _n(0,16))
_sp(0, 1)
_se(16, 0) // %17L19
_q(15, 0, [[_g(_n(0,3), false)]])
_sp(0, 1) // %18L19
_m1(16, 0, _n(0,18), _n(0,13))
_sp(0, 1) // %19L19
_m1(16, 0, _n(0,18), _n(0,3))
_sp(0, 1) // %20L19<W>
_m1(16, 0, _n(0,18), _n(undefined,23))
_sp(0, 1) // %21L19
_q(15, 0, [[_g(_n(0,3), true)]])
_sp(0, 1) // %22L19
_m1(16, 0, _n(0,22), _n(undefined,45))
_sp(0, 1) // %23L19
_m1(16, 0, _n(0,22), _n(0,3))
_sp(0, 1) // %24L19<W>
_m1(16, 0, _n(0,22), _n(undefined,37))
_sp(0, 1) // %25L19
_cnp({"BasicScrollBarThumb":1,"Draggable":2,"Clickable":3,"BasicVScrollBarThumb":4})
_ae(19, _n(0,7), {left:_n(undefined,12), right:_n(undefined,12), top:_n(1,18), bottom:_n(1,20), topDrag:_n(0,11), leftDrag:_n(undefined,77), height:_n(2,52)}, undefined, {"0":_n(undefined,129)}) // area template expr 19
_aw(19, "onDraggableMouseDown", _n(0,14), undefined, {writeY:_tm(_n(0,15), _n(0,17), 18)}, undefined, undefined, 17)
_aw(19, "onClickableMouseDown", _n(0,19), undefined, {selected:_tm(_n(0,20), _n(0,21), 18)}, undefined, undefined, 17)
_aw(19, "onClickableMouseUp", _n(0,23), undefined, {selected:_tm(_n(0,24), _n(0,25), 18)}, undefined, undefined, 17)
_ac(6, "gameTypeText", 0, true) // area template create 20
_mq(0, 0, ["message"]) // %0L20
_par(0, 0, ["param"]) // %1L20
_cnp(undefined)
_ae(20, _n(undefined,133), {top:_n(undefined,53), left:_n(undefined,40), right:_n(undefined,40), height:_n(undefined,40)}, undefined, undefined) // area template expr 20
_ac(6, "gameType", 0, true) // area template create 21
_mq(0, 0, ["message"]) // %0L21
_par(0, 0, ["param"]) // %1L21
_f(1, 0, offset, [_n(undefined,144), _n(undefined,145)])
_se(1, 0) // %2L21
_f(4, 0, minus, [_n(0,2), _n(undefined,149)])
_se(4, 0) // %3L21
_f(5, 0, div, [_n(0,3), _n(undefined,142)])
_se(5, 0) // %4L21
_f(6, 0, plus, [_n(0,4), _n(undefined,147)])
_se(6, 0) // %5L21
_cnp({"FixedMatrix":1})
_acc(21, {"cells":{data:_n(undefined,19),partner:undefined}})
_ae(21, undefined, {left:_n(undefined,40), right:_n(undefined,40), height:_n(undefined,135), top:_n(1,13)}, undefined, {"0":_n(undefined,134)}) // area template expr 21
_ac(21, "cells", 0, true) // area template create 22
_mq(0, 0, ["message"])
_sp(0, 1) // %0L22
_par(0, 0, ["param"])
_sp(0, 1) // %1L22
_f(1, 0, internalApply, [_n(undefined,8), _n(0,1)])
_sp(0, 1) // %2L22
_f(2, 0, equal, [_n(0,2), _n(3,3)]) // %3L22
_co(3, 0, _n(0,3), [{on:_n(undefined,23), use:_n(undefined,137)}, {on:_n(undefined,37), use:_n(undefined,139)}]) // %4L22
_co(3, 0, _n(0,3), [{on:_n(undefined,23), use:_n(undefined,140)}]) // %5L22
_a(4, 0, {textDecoration:_nf(0,5), value:_nf(0,2), color:_n(undefined,92), fontFamily:_n(undefined,93), fontWeight:_n(undefined,94)}, false) // %6L22
_a(5, 0, {background:_nf(0,4), text:_n(0,6)}, false) // %7L22
_f(1, 0, internalApply, [_n(undefined,112), _n(0,1)]) // %8L22
_f(2, 0, div, [_n(0,8), _n(undefined,142)]) // %9L22
_f(3, 0, floor, [_n(0,9)]) // %10L22
_f(4, 0, mul, [_n(0,10), _n(undefined,143)]) // %11L22
_f(5, 0, plus, [_n(0,11), _n(undefined,12)]) // %12L22
_f(2, 0, mod, [_n(0,8), _n(undefined,142)]) // %13L22
_f(7, 0, mul, [_n(0,13), _n(1,5)])
_se(7, 0) // %14L22
_f(8, 0, plus, [_n(0,14), _n(undefined,150)])
_se(8, 0) // %15L22
_f(1, 0, internalApply, [_n(undefined,41), _n(0,0)])
_sp(0, 1) // %16L22
_cnp({"FixedMatrixCell":1})
_ae(22, _n(0,7), {top:_n(0,12), left:_n(0,15), height:_n(undefined,95), width:_n(1,4)}, undefined, {"0":_n(undefined,141)}) // area template expr 22
_aw(22, "onClick", _n(0,16), undefined, {setGameType:_tm(_n(3,3), _n(0,2), 3)}, undefined, undefined, 2)
_ac(6, "boardSizeText", 0, true) // area template create 23
_mq(0, 0, ["message"]) // %0L23
_par(0, 0, ["param"]) // %1L23
_cnp(undefined)
_ae(23, _n(undefined,152), {left:_n(undefined,40), right:_n(undefined,40), height:_n(undefined,40), top:_n(1,16)}, undefined, undefined) // area template expr 23
_ac(6, "boardSize", 0, true) // area template create 24
_mq(0, 0, ["message"])
_sp(0, 1) // %0L24
_par(0, 0, ["param"]) // %1L24
_f(1, 0, offset, [_n(undefined,10), _n(undefined,11)])
_sp(0, 1)
_se(1, 0) // %2L24
_f(2, 0, plus, [_n(0,2), _n(undefined,12)])
_sp(0, 1)
_se(2, 0) // %3L24
_f(1, 0, me, [])
_sp(0, 1) // %4L24
_d(5, 0, "items", _n(0,4))
_sp(0, 1) // %5L24
_f(6, 0, first, [_n(0,5)])
_sp(0, 1) // %6L24
_a(7, 0, {element:_n(0,6), type:_n(undefined,13)}, undefined)
_sp(0, 1) // %7L24
_f(6, 0, last, [_n(0,5)])
_sp(0, 1) // %8L24
_a(7, 0, {element:_n(0,8), type:_n(undefined,14)}, undefined)
_sp(0, 1) // %9L24
_f(8, 0, offset, [_n(0,7), _n(0,9)])
_sp(0, 1)
_se(8, 0) // %10L24
_f(9, 0, plus, [_n(0,10), _n(undefined,12)])
_sp(0, 1)
_se(9, 0) // %11L24
_f(10, 0, greaterThanOrEqual, [_n(0,3), _n(0,11)])
_sp(0, 1)
_se(10, 0) // %12L24
_q(11, 0, [[_g(_n(0,12), false)], [], [], []])
_se(11, 0) // %13L24
_a(7, 0, {element:_nt(0,6)}, true) // %14L24
_a(8, 0, {point2:_nt(0,14)}, true) // %15L24
_m(12, 0, _n(0,13), [_n(undefined,2), _n(undefined,153), _n(0,15), _n(undefined,74)])
_se(12, 0) // %16L24
_q(11, 0, [[_g(_n(0,12), false)]])
_sp(0, 1)
_se(11, 0) // %17L24
_d(12, 0, "scrollbar", _n(0,4)) // %18L24
_a(13, 0, {type:_nf(undefined,29), element:_n(0,18)}, false) // %19L24
_d(13, 0, "thumb", _n(0,18)) // %20L24
_a(14, 0, {type:_nf(undefined,29), element:_n(0,20)}, false) // %21L24
_a(15, 0, {point1:_nf(0,19), point2:_nf(0,21)}, false) // %22L24
_a(7, 0, {type:_nf(undefined,29), element:_n(0,6)}, false) // %23L24
_a(8, 0, {point1:_nf(undefined,30), point2:_nf(0,23)}, false) // %24L24
_f(10, 0, div, [_n(0,11), _n(0,3)])
_se(10, 0) // %25L24
_f(11, 0, uminus, [_n(0,25)])
_se(11, 0) // %26L24
_a(16, 0, {pair1:_nf(0,22), pair2:_nf(0,24), ratio:_nt(0,26)}, false)
_se(16, 0) // %27L24
_m1(17, 0, _n(0,17), _n(0,27))
_se(17, 0) // %28L24
_f(1, 0, internalApply, [_n(undefined,78), _n(0,0)])
_sp(0, 1) // %29L24
_m1(12, 0, _n(0,17), _n(undefined,23))
_sp(0, 1)
_se(12, 0) // %30L24
_a(13, 0, {SimpleInvert:_n(undefined,23), FixedMatrix:_n(undefined,23), Draggable:_n(0,30), Clickable:_n(0,30), WheelScroll:_n(0,30)}, false)
_se(13, 0) // %31L24
_q(11, 0, [[_g(_n(0,12), false)], []])
_se(11, 0) // %32L24
_m(12, 0, _n(0,32), [_n(undefined,83), _n(undefined,84)])
_se(12, 0) // %33L24
_m1(12, 0, _n(0,17), _n(undefined,15))
_sp(0, 1)
_se(12, 0) // %34L24
_m1(12, 0, _n(0,17), _n(undefined,86))
_se(12, 0) // %35L24
_m1(12, 0, _n(0,17), _n(undefined,10))
_sp(0, 1)
_se(12, 0) // %36L24
_a(2, 0, {type:_nf(undefined,75), element:_n(0,4)}, false) // %37L24
_a(2, 0, {element:_n(0,4), type:_n(undefined,17)}, undefined)
_sp(0, 1) // %38L24
_m1(12, 0, _n(0,17), _n(undefined,80))
_sp(0, 1)
_se(12, 0) // %39L24
_m1(12, 0, _n(0,17), _n(undefined,81))
_sp(0, 1)
_se(12, 0) // %40L24
_m1(12, 0, _n(0,17), _n(undefined,12))
_sp(0, 1)
_se(12, 0) // %41L24
_f(10, 0, div, [_n(0,3), _n(0,11)])
_se(10, 0) // %42L24
_f(11, 0, mul, [_n(0,42), _n(0,3)])
_se(11, 0) // %43L24
_f(12, 0, max, [_n(0,43), _n(undefined,126)])
_se(12, 0) // %44L24
_cnp({"BasicListInAreaWithScrollbar":1,"BasicListInArea":2})
_acc(24, {"items":{data:_n(2,5),partner:undefined}})
_ae(24, undefined, {left:_n(undefined,40), right:_n(undefined,40), height:_n(undefined,97), top:_n(1,19), firstChild:_n(0,16), firstChildTopOppositeThumb:_n(0,28), minHeightZero:_n(undefined,77), minWidthZero:_n(2,41)}, undefined, {"0":_n(undefined,96)}) // area template expr 24
_aw(24, "blockWheelEvt", _n(0,29), _n(undefined,37), {}, undefined, undefined, 3)
_ac(24, "items", 4, true) // area template create 25
_mq(0, 0, ["message"])
_sp(0, 1) // %0L25
_par(0, 0, ["param"])
_sp(0, 1) // %1L25
_f(5, 0, internalApply, [_n(undefined,8), _n(0,1)])
_sp(0, 1) // %2L25
_f(6, 0, internalApply, [_n(undefined,20), _n(0,2)]) // %3L25
_f(6, 0, internalApply, [_n(undefined,21), _n(0,2)]) // %4L25
_f(7, 0, mul, [_n(0,3), _n(0,4)]) // %5L25
_rco(8, 0, [_n(undefined,12), _n(0,5)]) // %6L25
_f(9, 0, sequence, [_n(0,6)]) // %7L25
_f(6, 0, internalApply, [_n(3,2), _n(0,2)]) // %8L25
_q(7, 0, [[_g(_n(0,8), true)], []]) // %9L25
_m(8, 0, _n(0,9), [_n(undefined,99), _n(undefined,100)]) // %10L25
_q(7, 0, [[_g(_n(0,8), true)]]) // %11L25
_m1(8, 0, _n(0,11), _n(undefined,102)) // %12L25
_a(9, 0, {borderStyle:_nf(0,10), background:_nf(0,12), borderRadius:_n(undefined,56), borderColor:_nf(undefined,89), borderWidth:_n(undefined,90)}, false) // %13L25
_w(5, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %14L25<W>
_m1(12, 0, _n(1,17), _n(0,14))
_sp(0, 1)
_se(12, 0) // %15L25<W>
_m1(13, 0, _n(1,17), _n(0,15))
_sp(0, 1)
_se(13, 0) // %16L25
_q(14, 0, [[_g(_n(1,12), false), _g(_n(0,16), true)]])
_se(14, 0) // %17L25
_w(5, 0, ["context","mouseDownY"], _n(undefined,12),true)
_sp(0, 1) // %18L25<W>
_m1(12, 0, _n(1,17), _n(0,18))
_sp(0, 1)
_se(12, 0) // %19L25<W>
_a(13, 0, {point1:_nf(1,34), point2:_nf(undefined,85), equals:_nt(0,19), priority:_nt(1,35)}, false)
_se(13, 0) // %20L25
_m1(15, 0, _n(0,17), _n(0,20))
_se(15, 0) // %21L25
_q(14, 0, [[_g(_n(1,12), false), _g(_n(0,16), true), _g(_n(1,30), true)]])
_se(14, 0) // %22L25
_w(5, 0, ["context","mouseDownX"], _n(undefined,12),true)
_sp(0, 1) // %23L25<W>
_m1(12, 0, _n(1,17), _n(0,23))
_sp(0, 1)
_se(12, 0) // %24L25<W>
_a(13, 0, {point1:_nf(1,36), point2:_nf(undefined,103), equals:_nt(0,24), priority:_nt(1,35)}, false)
_se(13, 0) // %25L25
_m1(15, 0, _n(0,22), _n(0,25))
_se(15, 0) // %26L25
_w(5, 0, ["context","wheelScrollStage"], _n(undefined,12),false)
_sp(0, 1) // %27L25<W>
_m1(12, 0, _n(1,17), _n(0,27))
_sp(0, 1)
_se(12, 0) // %28L25<W>
_q(13, 0, [[_g(_n(1,12), false), _g(_n(0,28), o(1,2))]])
_se(13, 0) // %29L25
_w(5, 0, ["context","wheelOffset"], _n(undefined,2),false)
_sp(0, 1) // %30L25<W>
_m1(12, 0, _n(1,17), _n(0,30))
_sp(0, 1)
_se(12, 0) // %31L25<W>
_a(13, 0, {point1:_nf(1,37), point2:_nf(undefined,68), equals:_nt(0,31)}, false)
_se(13, 0) // %32L25
_m1(14, 0, _n(0,29), _n(0,32))
_se(14, 0) // %33L25
_f(5, 0, prev, []) // %34L25
_a(6, 0, {type:_n(undefined,57), element:_n(0,34)}, false) // %35L25
_a(7, 0, {point1:_n(0,35), point2:_n(undefined,30), equals:_n(undefined,104)}, false) // %36L25
_f(5, 0, internalApply, [_n(undefined,41), _n(0,0)])
_sp(0, 1) // %37L25
_f(6, 0, internalApply, [_n(undefined,154), _n(0,2)])
_sp(0, 1) // %38L25
_q(14, 0, [[_g(_n(1,12), false), _g(_n(0,16), false)]])
_sp(0, 1)
_se(14, 0) // %39L25
_f(5, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %40L25
_m1(15, 0, _n(0,39), _n(0,40))
_sp(0, 1)
_se(15, 0) // %41L25
_m1(15, 0, _n(0,39), _n(0,19))
_sp(0, 1)
_se(15, 0) // %42L25<W>
_f(13, 0, offset, [_n(1,34), _n(undefined,87)])
_sp(0, 1)
_se(13, 0) // %43L25
_m1(15, 0, _n(0,39), _n(0,43))
_sp(0, 1)
_se(15, 0) // %44L25
_q(14, 0, [[_g(_n(1,12), false), _g(_n(0,16), false), _g(_n(1,30), true)]])
_sp(0, 1)
_se(14, 0) // %45L25
_m1(15, 0, _n(0,45), _n(0,24))
_sp(0, 1)
_se(15, 0) // %46L25<W>
_f(13, 0, offset, [_n(1,36), _n(undefined,105)])
_sp(0, 1)
_se(13, 0) // %47L25
_m1(15, 0, _n(0,45), _n(0,47))
_sp(0, 1)
_se(15, 0) // %48L25
_q(13, 0, [[_g(_n(1,12), false), _g(_n(0,15), false)]])
_sp(0, 1)
_se(13, 0) // %49L25
_m1(14, 0, _n(0,49), _n(0,40))
_sp(0, 1)
_se(14, 0) // %50L25
_m1(14, 0, _n(0,49), _n(0,15))
_sp(0, 1)
_se(14, 0) // %51L25<W>
_m1(14, 0, _n(0,49), _n(undefined,23))
_sp(0, 1)
_se(14, 0) // %52L25
_q(13, 0, [[_g(_n(1,12), false), _g(_n(0,15), true)]])
_sp(0, 1)
_se(13, 0) // %53L25
_m1(14, 0, _n(0,53), _n(undefined,45))
_sp(0, 1)
_se(14, 0) // %54L25
_m1(14, 0, _n(0,53), _n(0,15))
_sp(0, 1)
_se(14, 0) // %55L25<W>
_m1(14, 0, _n(0,53), _n(undefined,37))
_sp(0, 1)
_se(14, 0) // %56L25
_f(5, 0, internalApply, [_n(undefined,78), _n(0,0)])
_sp(0, 1) // %57L25
_m1(12, 0, _n(1,17), _n(0,57))
_sp(0, 1)
_se(12, 0) // %58L25
_m1(13, 0, _n(1,17), _n(0,31))
_sp(0, 1)
_se(13, 0) // %59L25<W>
_f(5, 0, offset, [_n(1,38), _n(undefined,15)])
_sp(0, 1)
_se(5, 0) // %60L25
_f(5, 0, internalApply, [_n(undefined,79), _n(0,0)])
_sp(0, 1) // %61L25
_f(6, 0, minus, [_n(0,60), _n(0,61)])
_sp(0, 1)
_se(6, 0) // %62L25
_m1(12, 0, _n(1,17), _n(0,62))
_sp(0, 1)
_se(12, 0) // %63L25
_m1(13, 0, _n(1,17), _n(0,28))
_sp(0, 1)
_se(13, 0) // %64L25<W>
_f(13, 0, equal, [_n(0,28), _n(undefined,81)])
_sp(0, 1)
_se(13, 0) // %65L25
_m1(14, 0, _n(1,17), _n(0,65))
_sp(0, 1)
_se(14, 0) // %66L25
_f(7, 0, minus, [_n(undefined,114), _n(0,4)]) // %67L25
_f(8, 0, mul, [_n(0,67), _n(undefined,113)]) // %68L25
_f(9, 0, div, [_n(0,68), _n(undefined,81)]) // %69L25
_f(7, 0, minus, [_n(undefined,114), _n(0,3)]) // %70L25
_f(8, 0, mul, [_n(0,70), _n(undefined,113)]) // %71L25
_f(9, 0, div, [_n(0,71), _n(undefined,81)]) // %72L25
_cnp({"SimpleInvert":1,"FixedMatrix":2,"Draggable":3,"Clickable":4,"WheelScroll":5})
_acc(25, {"cells":{data:_n(0,7),partner:undefined}})
_ae(25, _n(0,13), {height:_n(undefined,97), width:_n(undefined,97), bottom:_n(1,33), topDrag:_n(0,21), leftDrag:_n(0,26), jumpToLabel:_n(0,33), top:_n(undefined,31), itemOrder:_n(0,36)}, undefined, {"0":_n(1,31)}) // area template expr 25
_aw(25, "onClick", _n(0,37), undefined, {doSomething:_tm(_n(3,2), _n(0,38), 7)}, undefined, undefined, 6)
_aw(25, "onDraggableMouseDown", _n(0,41), undefined, {writeY:_tm(_n(0,42), _n(0,44), 17),writeX:_tm(_n(0,46), _n(0,48), 17)}, undefined, undefined, 16)
_aw(25, "onClickableMouseDown", _n(0,50), undefined, {selected:_tm(_n(0,51), _n(0,52), 16)}, undefined, undefined, 15)
_aw(25, "onClickableMouseUp", _n(0,54), undefined, {selected:_tm(_n(0,55), _n(0,56), 16)}, undefined, undefined, 15)
_aw(25, "onWheel", _n(0,58), undefined, {setWheelOffset:_tm(_n(0,59), _n(0,63), 14),initWheelScroll:_tm(_n(0,64), _n(1,39), 14)}, undefined, {setWheelOffset:_tm(_n(0,64), _n(1,40), 14)}, 13)
_aw(25, "onEndOfSequence", _n(0,66), undefined, {setWheelOffset:_tm(_n(0,64), _n(1,41), 16)}, undefined, undefined, 15)
_ac(25, "cells", 10, true) // area template create 26
_mq(0, 0, ["message"]) // %0L26
_par(0, 0, ["param"]) // %1L26
_f(11, 0, internalApply, [_n(undefined,112), _n(0,1)]) // %2L26
_f(12, 0, div, [_n(0,2), _n(1,3)]) // %3L26
_f(13, 0, floor, [_n(0,3)]) // %4L26
_f(14, 0, mul, [_n(0,4), _n(undefined,113)]) // %5L26
_f(15, 0, plus, [_n(0,5), _n(1,69)]) // %6L26
_f(12, 0, mod, [_n(0,2), _n(1,3)]) // %7L26
_f(13, 0, mul, [_n(0,7), _n(undefined,113)]) // %8L26
_f(14, 0, plus, [_n(0,8), _n(1,72)]) // %9L26
_cnp({"InvertROCell":1,"FixedMatrixCell":2})
_ae(26, _n(undefined,155), {top:_n(0,6), left:_n(0,9), height:_n(undefined,115), width:_n(undefined,115)}, undefined, {"0":_n(undefined,111)}) // area template expr 26
_ac(24, "scrollbar", 11, true) // area template create 27
_mq(0, 0, ["message"])
_sp(0, 1) // %0L27
_par(0, 0, ["param"]) // %1L27
_w(12, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %2L27<W>
_q(13, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %3L27
_f(12, 0, me, []) // %4L27
_d(13, 0, "thumb", _n(0,4)) // %5L27
_a(14, 0, {type:_nf(undefined,118), element:_n(0,5)}, false) // %6L27
_a(15, 0, {point1:_nf(0,6), point2:_nf(undefined,103), equals:_nt(undefined,31), priority:_nt(undefined,119)}, false) // %7L27
_m1(16, 0, _n(0,3), _n(0,7)) // %8L27
_q(13, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %9L27
_f(12, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %10L27
_m1(14, 0, _n(0,9), _n(0,10))
_sp(0, 1) // %11L27
_m1(14, 0, _n(0,9), _n(0,2))
_sp(0, 1) // %12L27<W>
_m1(14, 0, _n(0,9), _n(undefined,23))
_sp(0, 1) // %13L27
_m1(14, 0, _n(0,3), _n(undefined,45))
_sp(0, 1) // %14L27
_m1(14, 0, _n(0,3), _n(0,2))
_sp(0, 1) // %15L27<W>
_m1(14, 0, _n(0,3), _n(undefined,37))
_sp(0, 1) // %16L27
_a(13, 0, {type:_n(undefined,55), element:_n(0,4)}, false) // %17L27
_a(14, 0, {point1:_n(0,17), point2:_n(undefined,30), min:_n(undefined,31)}, false) // %18L27
_a(13, 0, {type:_n(undefined,57), element:_n(0,4)}, false) // %19L27
_a(14, 0, {point1:_n(undefined,33), point2:_n(0,19), min:_n(undefined,31)}, false) // %20L27
_aeq([[_g(_n(1,12), false)]])
_cnp({"BasicHScrollBar":1,"BasicScrollBar":2,"Clickable":3})
_ae(27, undefined, {bottom:_n(undefined,31), left:_n(undefined,31), right:_n(undefined,117), height:_n(undefined,56), moveScrollBar:_n(0,8)}, undefined, {"0":_n(undefined,116)}) // area template expr 27
_aw(27, "onClickableMouseDown", _n(0,11), undefined, {selected:_tm(_n(0,12), _n(0,13), 16)}, undefined, undefined, 15)
_aw(27, "onClickableMouseUp", _n(0,14), undefined, {selected:_tm(_n(0,15), _n(0,16), 16)}, undefined, undefined, 15)
_ac(27, "thumb", 11, true) // area template create 28
_mq(0, 0, ["message"])
_sp(0, 1) // %0L28
_par(0, 0, ["param"]) // %1L28
_f(12, 0, internalApply, [_n(undefined,120), _n(0,1)]) // %2L28
_w(12, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %3L28<W>
_f(13, 0, or, [_n(0,2), _n(0,3)]) // %4L28
_q(14, 0, [[_g(_n(0,4), true)], []]) // %5L28
_m(15, 0, _n(0,5), [_n(undefined,121), _n(undefined,122)]) // %6L28
_a(16, 0, {opacity:_nf(0,6), background:_n(undefined,156), borderRadius:_n(undefined,157)}, false) // %7L28
_q(13, 0, [[_g(_n(0,3), true)]]) // %8L28
_w(12, 0, ["context","mouseDownX"], _n(undefined,12),true)
_sp(0, 1) // %9L28<W>
_a(13, 0, {point1:_nf(undefined,10), point2:_nf(undefined,103), equals:_nt(0,9), priority:_nt(undefined,119)}, false) // %10L28
_m1(14, 0, _n(0,8), _n(0,10)) // %11L28
_q(13, 0, [[_g(_n(0,3), false)]])
_sp(0, 1) // %12L28
_f(12, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %13L28
_m1(14, 0, _n(0,12), _n(0,13))
_sp(0, 1) // %14L28
_m1(14, 0, _n(0,12), _n(0,9))
_sp(0, 1) // %15L28<W>
_f(12, 0, offset, [_n(undefined,10), _n(undefined,105)])
_sp(0, 1)
_se(12, 0) // %16L28
_m1(14, 0, _n(0,12), _n(0,16))
_sp(0, 1)
_se(14, 0) // %17L28
_q(13, 0, [[_g(_n(0,3), false)]])
_sp(0, 1) // %18L28
_m1(14, 0, _n(0,18), _n(0,13))
_sp(0, 1) // %19L28
_m1(14, 0, _n(0,18), _n(0,3))
_sp(0, 1) // %20L28<W>
_m1(14, 0, _n(0,18), _n(undefined,23))
_sp(0, 1) // %21L28
_q(13, 0, [[_g(_n(0,3), true)]])
_sp(0, 1) // %22L28
_m1(14, 0, _n(0,22), _n(undefined,45))
_sp(0, 1) // %23L28
_m1(14, 0, _n(0,22), _n(0,3))
_sp(0, 1) // %24L28<W>
_m1(14, 0, _n(0,22), _n(undefined,37))
_sp(0, 1) // %25L28
_cnp({"BasicHScrollBarThumb":1,"BasicScrollBarThumb":2,"Draggable":3,"Clickable":4})
_ae(28, _n(0,7), {left:_n(1,18), right:_n(1,20), top:_n(undefined,12), width:_n(2,44), bottom:_n(undefined,12), topDrag:_n(undefined,77), leftDrag:_n(0,11)}, undefined, {"0":_n(undefined,125)}) // area template expr 28
_aw(28, "onDraggableMouseDown", _n(0,14), undefined, {writeX:_tm(_n(0,15), _n(0,17), 16)}, undefined, undefined, 15)
_aw(28, "onClickableMouseDown", _n(0,19), undefined, {selected:_tm(_n(0,20), _n(0,21), 16)}, undefined, undefined, 15)
_aw(28, "onClickableMouseUp", _n(0,23), undefined, {selected:_tm(_n(0,24), _n(0,25), 16)}, undefined, undefined, 15)
_ac(1, "gameContainer", 0, true) // area template create 29
_mq(0, 0, ["message"]) // %0L29
_par(0, 0, ["param"]) // %1L29
_f(1, 0, me, [])
_sp(0, 1) // %2L29
_d(2, 0, "game", _n(0,2))
_sp(0, 1) // %3L29
_a(3, 0, {type:_n(undefined,57), element:_n(0,3)}, false) // %4L29
_a(4, 0, {point1:_n(0,4), point2:_n(undefined,33), equals:_nt(undefined,60)}, false) // %5L29
_a(3, 0, {type:_n(undefined,67), element:_n(0,3)}, false) // %6L29
_a(4, 0, {point1:_n(0,6), point2:_n(undefined,68), equals:_nt(undefined,60)}, false) // %7L29
_d(2, 0, "undoButton", _n(0,2)) // %8L29
_a(3, 0, {type:_n(undefined,130), element:_n(0,8)}, false) // %9L29
_a(4, 0, {point1:_n(0,9), point2:_n(undefined,68), equals:_nt(undefined,60)}, false) // %10L29
_a(3, 0, {type:_n(undefined,55), element:_n(0,8)}, false) // %11L29
_a(4, 0, {point1:_n(undefined,33), point2:_n(0,11), equals:_nt(undefined,60)}, false) // %12L29
_p(3, 0, 1, _n(0,3))
_sp(0, 1) // %13L29<W>
_p(3, 0, 2, _n(0,3))
_sp(0, 1) // %14L29<W>
_cnp({"LTRContainer":1})
_ae(29, _n(undefined,26), {left:_n(1,44), anchorLeftToEmbedding:_n(1,47), anchorLRightToEmbedding:_n(1,48), top:_n(undefined,31), bottom:_n(undefined,31), stableWidth:_n(undefined,34)}, undefined, {"0":_n(undefined,158)}) // area template expr 29
_ac(29, "backButton", 0, true) // area template create 30
_mq(0, 0, ["message"])
_sp(0, 1) // %0L30
_par(0, 0, ["param"]) // %1L30
_w(1, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %2L30<W>
_q(2, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %3L30
_m1(3, 0, _n(0,3), _n(undefined,38)) // %4L30
_a(4, 0, {image:_n(undefined,61), filter:_n(undefined,36), padding:_nf(0,4)}, false) // %5L30
_f(1, 0, internalApply, [_n(undefined,41), _n(0,0)])
_sp(0, 1) // %6L30
_q(2, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %7L30
_f(1, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %8L30
_m1(3, 0, _n(0,7), _n(0,8))
_sp(0, 1) // %9L30
_m1(3, 0, _n(0,7), _n(0,2))
_sp(0, 1) // %10L30<W>
_m1(3, 0, _n(0,7), _n(undefined,23))
_sp(0, 1) // %11L30
_m1(3, 0, _n(0,3), _n(undefined,45))
_sp(0, 1) // %12L30
_m1(3, 0, _n(0,3), _n(0,2))
_sp(0, 1) // %13L30<W>
_m1(3, 0, _n(0,3), _n(undefined,37))
_sp(0, 1) // %14L30
_cnp({"NextContainer":1,"IconButton":2,"DepressWhileMouseDown":3,"Clickable":4})
_ae(30, _n(0,5), {top:_n(undefined,40), left:_n(undefined,40), width:_n(undefined,40), height:_n(undefined,40)}, undefined, {"0":_n(undefined,39)}) // area template expr 30
_aw(30, "onClick", _n(0,6), undefined, {switch:_tm(_n(2,8), _n(undefined,42), 3)}, undefined, undefined, 2)
_aw(30, "onClickableMouseDown", _n(0,9), undefined, {selected:_tm(_n(0,10), _n(0,11), 5)}, undefined, undefined, 4)
_aw(30, "onClickableMouseUp", _n(0,12), undefined, {selected:_tm(_n(0,13), _n(0,14), 5)}, undefined, undefined, 4)
_ac(29, "game", 0, true) // area template create 31
_mq(0, 0, ["message"]) // %0L31
_par(0, 0, ["param"]) // %1L31
_w(1, 0, ["context","matrixData"], _n(undefined,2),false)
_sp(0, 1) // %2L31<W>
_w(1, 0, ["context","history"], _n(undefined,2),false)
_sp(0, 1) // %3L31<W>
_a(2, 0, {board:_n(0,2), column:_n(undefined,164), row:_n(undefined,166)}, undefined)
_sp(0, 1) // %4L31
_f(3, 0, internalPush, [_n(0,4)])
_sp(0, 1) // %5L31
_f(2, 0, notEmpty, [_n(0,3)])
_sp(0, 1) // %6L31
_f(3, 0, and, [_n(undefined,168), _n(0,6)])
_sp(0, 1) // %7L31
_f(2, 0, last, [_n(0,3)])
_sp(0, 1) // %8L31
_f(3, 0, internalApply, [_n(undefined,9), _n(0,8)])
_sp(0, 1) // %9L31
_f(2, 0, pos, [_n(undefined,170), _n(0,3)])
_sp(0, 1) // %10L31
_f(1, 0, me, [])
_sp(0, 1) // %11L31
_d(3, 0, "cells", _n(0,11))
_sp(0, 1) // %12L31
_s(6, 0, 4, _n(undefined,23), true, _n(0,12)) // %13L31
_p(26, 0, 5, _n(0,13)) // %14L31
_f(1, 0, offset, [_n(undefined,144), _n(undefined,145)])
_se(1, 0) // %15L31
_f(6, 0, minus, [_n(0,15), _n(2,62)])
_se(6, 0) // %16L31
_f(7, 0, div, [_n(0,16), _n(2,32)])
_se(7, 0) // %17L31
_f(8, 0, plus, [_n(0,17), _n(undefined,12)])
_se(8, 0) // %18L31
_cnp({"Invert":1,"FixedMatrix":2})
_acc(31, {"cells":{data:_n(0,2),partner:undefined}})
_ae(31, undefined, {"horizontal-center":_n(undefined,31), height:_n(2,53), width:_n(2,53), "vertical-center":_n(undefined,31)}, undefined, {"0":_n(undefined,159), "1":_n(0,2), "2":_n(0,3)}) // area template expr 31
_aw(31, "onInvert", _n(undefined,162), undefined, {invert:_tm(_n(0,3), _n(0,5), 4)}, undefined, undefined, 2)
_aw(31, "onRevert", _n(0,7), undefined, {revertBoard:_tm(_n(0,2), _n(0,9), 5),popHistory:_tm(_n(0,3), _n(0,10), 5)}, undefined, undefined, 4)
_ac(31, "cells", 2, true) // area template create 32
_mq(0, 0, ["message"])
_sp(0, 1) // %0L32
_par(0, 0, ["param"])
_sp(0, 1) // %1L32<W>
_w(3, 0, ["context","hasBeenClickedOn"], _n(undefined,37),false)
_sp(0, 1) // %2L32<W>
_f(4, 0, not, [_n(0,2)]) // %3L32
_f(3, 0, internalApply, [_n(undefined,120), _n(0,1)])
_sp(0, 1) // %4L32
_f(5, 0, and, [_n(0,3), _n(0,4)]) // %5L32
_f(3, 0, internalApply, [_n(undefined,8), _n(0,1)])
_owp(3, 0)
_sp(0, 1) // %6L32<W>
_f(3, 0, me, [])
_sp(0, 1) // %7L32
_f(3, 0, internalApply, [_n(undefined,112), _n(0,1)])
_sp(0, 1) // %8L32
_f(4, 0, div, [_n(0,8), _n(3,32)])
_sp(0, 1) // %9L32
_f(5, 0, floor, [_n(0,9)])
_sp(0, 1) // %10L32
_f(6, 0, minus, [_n(0,10), _n(undefined,80)])
_sp(0, 1) // %11L32
_f(7, 0, max, [_n(0,11), _n(undefined,12)])
_sp(0, 1) // %12L32
_f(6, 0, plus, [_n(0,10), _n(undefined,80)])
_sp(0, 1) // %13L32
_rcc(8, 0, [_n(0,12), _n(0,13)])
_sp(0, 1) // %14L32
_f(9, 0, sequence, [_n(0,14)])
_sp(0, 1) // %15L32
_f(10, 0, mul, [_n(0,15), _n(3,32)])
_sp(0, 1) // %16L32
_f(4, 0, mod, [_n(0,8), _n(3,32)])
_sp(0, 1) // %17L32
_f(11, 0, plus, [_n(0,16), _n(0,17)])
_sp(0, 1) // %18L32
_f(12, 0, pos, [_n(0,18), _n(1,12)])
_sp(0, 1) // %19L32
_f(6, 0, plus, [_n(3,57), _n(0,17)])
_sp(0, 1) // %20L32
_f(7, 0, pos, [_n(0,20), _n(1,12)])
_sp(0, 1) // %21L32
_m(13, 0, _n(3,54), [_n(0,19), _n(0,21)])
_sp(0, 1) // %22L32
_f(5, 0, minus, [_n(0,17), _n(undefined,80)])
_sp(0, 1) // %23L32
_f(6, 0, max, [_n(0,23), _n(undefined,12)])
_sp(0, 1) // %24L32
_f(6, 0, mul, [_n(0,10), _n(3,32)])
_sp(0, 1) // %25L32
_f(7, 0, plus, [_n(0,24), _n(0,25)])
_sp(0, 1) // %26L32
_f(5, 0, plus, [_n(0,17), _n(undefined,80)])
_sp(0, 1) // %27L32
_f(6, 0, min, [_n(0,27), _n(3,58)])
_sp(0, 1) // %28L32
_f(7, 0, plus, [_n(0,28), _n(0,25)])
_sp(0, 1) // %29L32
_rcc(8, 0, [_n(0,26), _n(0,29)])
_sp(0, 1) // %30L32
_f(9, 0, pos, [_n(0,30), _n(1,12)])
_sp(0, 1) // %31L32
_f(7, 0, mul, [_n(0,13), _n(3,32)])
_sp(0, 1) // %32L32
_rco(8, 0, [_n(0,25), _n(0,32)])
_sp(0, 1) // %33L32
_f(9, 0, pos, [_n(0,33), _n(1,12)])
_sp(0, 1) // %34L32
_m(10, 0, _n(3,54), [_n(0,31), _n(0,34)])
_sp(0, 1) // %35L32
_o(14, 0, [_n(0,22), _n(0,35)])
_sp(0, 1) // %36L32
_f(11, 0, prevPlus, [_n(0,35), _n(0,7)])
_sp(0, 1) // %37L32
_f(4, 0, not, [_n(0,6)])
_sp(0, 1) // %38L32
_s(12, 0, 6, _n(0,38), true, _n(0,37))
_sp(0, 1) // %39L32
_f(13, 0, last, [_n(0,39)])
_sp(0, 1) // %40L32
_m1(14, 0, _n(3,59), _n(0,40))
_sp(0, 1) // %41L32
_f(11, 0, first, [_n(0,35)])
_sp(0, 1) // %42L32
_o(15, 0, [_n(0,41), _n(0,42)])
_sp(0, 1) // %43L32
_f(16, 0, first, [_n(0,43)])
_sp(0, 1) // %44L32
_m1(17, 0, _n(3,59), _n(0,44))
_sp(0, 1) // %45L32
_f(18, 0, nextStar, [_n(0,35), _n(0,45)])
_sp(0, 1) // %46L32
_f(11, 0, nextPlus, [_n(0,35), _n(0,7)])
_sp(0, 1) // %47L32
_s(12, 0, 6, _n(0,38), true, _n(0,47))
_sp(0, 1) // %48L32
_f(13, 0, first, [_n(0,48)])
_sp(0, 1) // %49L32
_m1(14, 0, _n(3,59), _n(0,49))
_sp(0, 1) // %50L32
_f(11, 0, last, [_n(0,35)])
_sp(0, 1) // %51L32
_o(15, 0, [_n(0,50), _n(0,51)])
_sp(0, 1) // %52L32
_f(16, 0, first, [_n(0,52)])
_sp(0, 1) // %53L32
_m1(17, 0, _n(3,59), _n(0,53))
_sp(0, 1) // %54L32
_f(18, 0, prevStar, [_n(0,35), _n(0,54)])
_sp(0, 1) // %55L32
_f(19, 0, compareAreasQuery, [_n(0,46), _n(0,55)])
_sp(0, 1) // %56L32
_m1(20, 0, _n(3,59), _n(0,56))
_sp(0, 1) // %57L32
_f(14, 0, prevPlus, [_n(0,22), _n(0,7)])
_sp(0, 1) // %58L32
_s(15, 0, 6, _n(0,38), true, _n(0,58))
_sp(0, 1) // %59L32
_f(16, 0, last, [_n(0,59)])
_sp(0, 1) // %60L32
_m1(17, 0, _n(3,59), _n(0,60))
_sp(0, 1) // %61L32
_f(14, 0, first, [_n(0,22)])
_sp(0, 1) // %62L32
_o(18, 0, [_n(0,61), _n(0,62)])
_sp(0, 1) // %63L32
_f(19, 0, first, [_n(0,63)])
_sp(0, 1) // %64L32
_m1(20, 0, _n(3,59), _n(0,64))
_sp(0, 1) // %65L32
_f(21, 0, nextStar, [_n(0,22), _n(0,65)])
_sp(0, 1) // %66L32
_f(14, 0, nextPlus, [_n(0,22), _n(0,7)])
_sp(0, 1) // %67L32
_s(15, 0, 6, _n(0,38), true, _n(0,67))
_sp(0, 1) // %68L32
_f(16, 0, first, [_n(0,68)])
_sp(0, 1) // %69L32
_m1(17, 0, _n(3,59), _n(0,69))
_sp(0, 1) // %70L32
_f(14, 0, last, [_n(0,22)])
_sp(0, 1) // %71L32
_o(18, 0, [_n(0,70), _n(0,71)])
_sp(0, 1) // %72L32
_f(19, 0, first, [_n(0,72)])
_sp(0, 1) // %73L32
_m1(20, 0, _n(3,59), _n(0,73))
_sp(0, 1) // %74L32
_f(21, 0, prevStar, [_n(0,22), _n(0,74)])
_sp(0, 1) // %75L32
_f(22, 0, compareAreasQuery, [_n(0,66), _n(0,75)])
_sp(0, 1) // %76L32
_m1(23, 0, _n(3,59), _n(0,76))
_sp(0, 1) // %77L32
_o(24, 0, [_n(0,57), _n(0,77)])
_sp(0, 1) // %78L32
_m(25, 0, _n(3,54), [_n(0,36), _n(0,78)])
_sp(0, 1) // %79L32
_f(27, 0, compareAreasQuery, [_n(0,7), _n(1,14)]) // %80L32
_q(28, 0, [[_g(_n(0,5), true), _g(_n(0,6), true)], [_g(_n(0,80), true), _g(_n(0,6), true)], [_g(_n(0,5), false), _g(_n(0,6), true)], [_g(_n(0,5), true), _g(_n(0,6), false)], [_g(_n(0,80), true), _g(_n(0,6), false)], [_g(_n(0,5), false), _g(_n(0,6), false)], [_g(_n(0,6), false)], [_g(_n(0,6), true)], []]) // %81L32
_m(29, 0, _n(0,81), [_n(undefined,89), _n(undefined,139), _n(undefined,49), _n(undefined,172), _n(undefined,137), _n(undefined,174), _n(undefined,109), _n(undefined,49), _n(undefined,110)]) // %82L32
_q(28, 0, [[_g(_n(0,5), true)], [_g(_n(0,80), true)]]) // %83L32
_m(29, 0, _n(0,83), [_n(undefined,175), _n(undefined,176)]) // %84L32
_a(30, 0, {background:_nf(0,82), transform:_nf(0,84), borderWidth:_n(undefined,106), borderStyle:_n(undefined,107), borderColor:_n(undefined,108)}, false) // %85L32
_f(6, 0, mul, [_n(0,10), _n(3,60)]) // %86L32
_f(7, 0, plus, [_n(0,86), _n(undefined,81)]) // %87L32
_f(9, 0, mul, [_n(0,17), _n(1,18)])
_se(9, 0) // %88L32
_f(10, 0, plus, [_n(0,88), _n(undefined,81)])
_se(10, 0) // %89L32
_f(3, 0, internalApply, [_n(undefined,41), _n(0,0)])
_sp(0, 1) // %90L32
_a(26, 0, {msg:_n(undefined,178), targets:_n(0,79), row:_n(0,10), column:_n(0,17)}, undefined)
_sp(0, 1) // %91L32
_f(4, 0, not, [_n(0,4)])
_sp(0, 1) // %92L32
_f(5, 0, and, [_n(0,2), _n(0,92)])
_sp(0, 1) // %93L32
_a(4, 0, {msg:_n(undefined,178), recipient:_n(undefined,179), targets:_n(0,7)}, undefined)
_sp(0, 1) // %94L32
_f(5, 0, internalApply, [_n(0,94), _n(undefined,0)])
_sp(0, 1) // %95L32
_cnp({"InvertCell":1,"InvertROCell":2,"FixedMatrixCell":3})
_ae(32, _n(0,85), {top:_n(0,87), left:_n(0,89), height:_n(3,51), width:_n(1,17)}, undefined, {"0":_n(undefined,177), "4":_n(0,5), "5":_n(0,79), "6":_n(0,6)}) // area template expr 32
_aw(32, "onClick", _n(0,90), undefined, {invert:_tm(_n(undefined,0), _n(0,91), 27),rememberClick:_tm(_n(0,2), _n(undefined,23), 5)}, undefined, undefined, 4)
_aw(32, "onPtrInAreaChange", _n(0,93), undefined, {forgetClick:_tm(_n(0,2), _n(undefined,37), 7)}, undefined, undefined, 6)
_aw(32, "onInvert", _n(0,95), undefined, {invert:_tm(_n(0,6), _n(0,38), 7)}, undefined, undefined, 6)
_ac(29, "undoButton", 0, true) // area template create 33
_mq(0, 0, ["message"])
_sp(0, 1) // %0L33
_par(0, 0, ["param"]) // %1L33
_w(1, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %2L33<W>
_q(2, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %3L33
_m1(3, 0, _n(0,3), _n(undefined,38)) // %4L33
_a(4, 0, {image:_n(undefined,180), filter:_n(undefined,36), padding:_nf(0,4)}, false) // %5L33
_f(1, 0, internalApply, [_n(undefined,41), _n(0,0)])
_sp(0, 1) // %6L33
_q(2, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %7L33
_f(1, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %8L33
_m1(3, 0, _n(0,7), _n(0,8))
_sp(0, 1) // %9L33
_m1(3, 0, _n(0,7), _n(0,2))
_sp(0, 1) // %10L33<W>
_m1(3, 0, _n(0,7), _n(undefined,23))
_sp(0, 1) // %11L33
_m1(3, 0, _n(0,3), _n(undefined,45))
_sp(0, 1) // %12L33
_m1(3, 0, _n(0,3), _n(0,2))
_sp(0, 1) // %13L33<W>
_m1(3, 0, _n(0,3), _n(undefined,37))
_sp(0, 1) // %14L33
_cnp({"IconButton":1,"DepressWhileMouseDown":2,"Clickable":3})
_ae(33, _n(0,5), {right:_n(1,5), top:_n(1,7), width:_n(undefined,40), height:_n(undefined,40)}, undefined, {"0":_n(undefined,181)}) // area template expr 33
_aw(33, "onClick", _n(0,6), undefined, {sendUndo:_tm(_n(undefined,0), _n(undefined,182), 3)}, undefined, undefined, 2)
_aw(33, "onClickableMouseDown", _n(0,9), undefined, {selected:_tm(_n(0,10), _n(0,11), 5)}, undefined, undefined, 4)
_aw(33, "onClickableMouseUp", _n(0,12), undefined, {selected:_tm(_n(0,13), _n(0,14), 5)}, undefined, undefined, 4)
_ac(29, "resetButton", 0, true) // area template create 34
_mq(0, 0, ["message"])
_sp(0, 1) // %0L34
_par(0, 0, ["param"]) // %1L34
_w(1, 0, ["context","selected"], _n(undefined,37),true)
_sp(0, 1) // %2L34<W>
_q(2, 0, [[_g(_n(0,2), true)]])
_sp(0, 1) // %3L34
_m1(3, 0, _n(0,3), _n(undefined,38)) // %4L34
_a(4, 0, {image:_n(undefined,183), filter:_n(undefined,36), padding:_nf(0,4)}, false) // %5L34
_f(1, 0, internalApply, [_n(undefined,41), _n(0,0)])
_sp(0, 1) // %6L34
_q(2, 0, [[_g(_n(0,2), false)]])
_sp(0, 1) // %7L34
_f(1, 0, internalApply, [_n(undefined,43), _n(0,0)])
_sp(0, 1) // %8L34
_m1(3, 0, _n(0,7), _n(0,8))
_sp(0, 1) // %9L34
_m1(3, 0, _n(0,7), _n(0,2))
_sp(0, 1) // %10L34<W>
_m1(3, 0, _n(0,7), _n(undefined,23))
_sp(0, 1) // %11L34
_m1(3, 0, _n(0,3), _n(undefined,45))
_sp(0, 1) // %12L34
_m1(3, 0, _n(0,3), _n(0,2))
_sp(0, 1) // %13L34<W>
_m1(3, 0, _n(0,3), _n(undefined,37))
_sp(0, 1) // %14L34
_cnp({"IconButton":1,"DepressWhileMouseDown":2,"Clickable":3})
_ae(34, _n(0,5), {top:_n(1,10), left:_n(1,12), width:_n(undefined,40), height:_n(undefined,40)}, undefined, {"0":_n(undefined,181)}) // area template expr 34
_aw(34, "onClick", _n(0,6), undefined, {reset:_tm(_n(1,13), _n(2,63), 4),clearHistory:_tm(_n(1,14), _n(undefined,2), 4)}, undefined, undefined, 2)
_aw(34, "onClickableMouseDown", _n(0,9), undefined, {selected:_tm(_n(0,10), _n(0,11), 5)}, undefined, undefined, 4)
_aw(34, "onClickableMouseUp", _n(0,12), undefined, {selected:_tm(_n(0,13), _n(0,14), 5)}, undefined, undefined, 4)
_mss(0, 30)
_mss(1, 27)
// compile time: 0.55 s
// nr wont change: 537
