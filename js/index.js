const glide = new Glide('.glide');
const captionEl = document.querySelectorAll('.slide-caption')
//监听轮播图挂载和轮播对应事件
glide.on(['mount.after', 'run.after'], () => {
    //获取正在轮播的caption
    const caption = captionEl[glide.index]
    anime({
        targets: caption.children,
        opacity: [0, 1],
        //动画持续时间
        duration: 400,
        easing: 'linear',
        //动画执行间隔400ms 起始等待300ms
        delay: anime.stagger(400, 300),
        //从下方移动到上方 []表示最大移动距离40 最后一个元素最大移动距离是10
        translateY: [anime.stagger(40, 10), 0]
        // strokeDashoffset: [anime.setDashoffset, 0],
        // easing: 'easeInOutSine',
        // duration: 1500,
        // delay: function(el, i) { return i * 250 },
        // direction: 'alternate',
        // loop: true
    })
})
//轮播之前重置透明度
glide.on('run.before', () => {
    document.querySelectorAll('.slide-caption>*').forEach(el => {
        el.style.opacity = 0;
    })
})
glide.mount()

const isotope = new Isotope(".cases", {
    layoutMode: "fitRows",
    itemSelector: ".case-item",
    
})
const filterBtns = document.querySelector(".filter-btns")
filterBtns.addEventListener("click", function (e) {
    let {target} = e
    const filterOption = target.getAttribute("data-filter")
    if (filterOption) {
        document.querySelectorAll(".filter-btn.active").forEach(btn => {
            btn.classList.remove("active")
        })
        target.classList.add("active")
        isotope.arrange({filter: filterOption})
    }
})
