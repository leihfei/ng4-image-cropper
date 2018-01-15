import { EventEmitter, OnChanges, OnInit, SimpleChanges } from "@angular/core";
export declare class CropperComponent implements OnInit, OnChanges {
    URL: null;
    $inputImage: null;
    $image: null;
    uploadedImageType: string;
    uploadedImageURL: any;
    options: null;
    $download: null;
    originalImageURL: null;
    dataHeight: number;
    dataWidth: number;
    dataX: number;
    dataY: number;
    dataRotate: number;
    dataScaleX: number;
    dataScaleY: number;
    imageData: EventEmitter<any>;
    srcImage: any;
    cropBoxResizable: boolean;
    viewMode: number;
    dragMode: string;
    aspectRatio: number;
    responsive: boolean;
    restore: boolean;
    checkCrossOrigin: boolean;
    checkOrientation: boolean;
    modal: boolean;
    guides: boolean;
    center: boolean;
    highlight: boolean;
    background: boolean;
    autoCrop: boolean;
    autoCropArea: number;
    movable: boolean;
    rotatable: boolean;
    scalable: boolean;
    zoomable: boolean;
    zoomOnTouch: boolean;
    zoomOnWheel: boolean;
    wheelZoomRatio: boolean;
    cropBoxMovable: boolean;
    toggleDragModeOnDblclick: boolean;
    minContainerWidth: number;
    minContainerHeight: number;
    minCanvasWidth: number;
    minCanvasHeight: number;
    minCropBoxWidth: number;
    minCropBoxHeight: number;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    init(): void;
    initValue(): void;
    initKeyboard(): void;
    inputImageUpload(): void;
    option(method: any, option: any): void;
    action(method: any): void;
    getCanvas(method: any, heights: number, widths: number): void;
    optionData(method: string, target: any): void;
    move(offsetX: any, offsetY: any): void;
    rotate(degree: any): void;
    getImageAndClose(): void;
    downLoad(): void;
}
