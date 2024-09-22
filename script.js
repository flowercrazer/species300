var currentSpeed = 1;
var scrollInterval;
var isScrolling = false;

function updateSpeed(value) {
    currentSpeed = value;
    document.getElementById('speedValue').textContent = value;

    if (isScrolling) {
        clearInterval(scrollInterval);
        startScroll();
    }
}

function startScroll() {
    if (isScrolling) {
        clearInterval(scrollInterval);
    }

    scrollInterval = setInterval(function () {
        window.scrollBy({
            top: 100,
            left: 0,
            behavior: 'smooth'
        });
    }, currentSpeed);

    isScrolling = true;
    document.getElementById('pauseButton').textContent = "일시정지";
}

function toggleScroll() {
    var pauseButton = document.getElementById('pauseButton');

    if (isScrolling) {
        clearInterval(scrollInterval);
        pauseButton.textContent = "진행시켜";
        isScrolling = false;
    } else {
        startScroll();
        pauseButton.textContent = "일시정지";
    }
}

function restartScroll() {
    clearInterval(scrollInterval);
    window.scrollTo({ top: 0, behavior: 'auto' });
    isScrolling = false;
    document.getElementById('pauseButton').textContent = "진행시켜";
}

document.addEventListener("DOMContentLoaded", function() {
    var familyCells = document.querySelectorAll("td.family");
    var speciesCells = document.querySelectorAll("td.species");

    familyCells.forEach(function(cell) {
        cell.addEventListener("click", function() {
            selectTextInCell(cell);
        });
    });

    speciesCells.forEach(function(cell) {
        cell.addEventListener("click", function() {
            selectTextInCell(cell);
        });
    });
});

	  // 모든 이미지의 크기를 슬라이더 값에 맞춰 변경하는 함수
  function resizeAllImages(size) {
    var images = document.querySelectorAll('img');  // 모든 이미지 선택
    images.forEach(function(image) {
      image.style.height = size + 'px';  // 이미지 높이 설정
    });
    document.getElementById('sizeDisplay').textContent = size;  // 현재 크기 표시
  }

  function toggleFamilyText() {
            var checkbox = document.getElementById("subjectCheckbox");
            var familyCells = document.getElementsByClassName("family");
            
            // 체크박스가 체크되면 글자를 보이게, 체크 해제되면 글자를 숨김
            for (var i = 0; i < familyCells.length; i++) {
                if (checkbox.checked) {
                    familyCells[i].style.color = "#000000"; // 글자 보이게 (검정색)
                } else {
                    familyCells[i].style.color = familyCells[i].style.backgroundColor; // 글자 숨김 (배경색과 동일)
                }
            }
        }

		  function toggleSpeciesLinks() {
            var checkbox = document.getElementById("subjectCheckboxS");
           // var speciesCells = document.getElementsByClassName("species");
		    var speciesLinks = document.querySelectorAll("td.species a");
            
            // 체크박스가 체크되면 글자를 보이게, 체크 해제되면 글자를 숨김
            speciesLinks.forEach(function(link) {
                if (checkbox.checked) {
                    link.style.color = "#000000"; // 글자를 보이게 (검정색)
                } else {
                    link.style.color = link.style.backgroundColor; // 글자를 숨김 (배경색과 동일하게 설정)
                }
            });
        }

		        function selectTextInCell(element) {
            var range = document.createRange();
            var selection = window.getSelection();
            range.selectNodeContents(element); // 셀 내의 텍스트 전체 선택
            selection.removeAllRanges(); // 기존 선택된 영역을 제거
            selection.addRange(range); // 새로운 범위를 추가해 선택
        }

        // 모든 class="family"인 td 요소에 클릭 이벤트 리스너 추가
        document.addEventListener("DOMContentLoaded", function() {
            var familyCells = document.querySelectorAll("td.family");
            familyCells.forEach(function(cell) {
                cell.addEventListener("click", function() {
                    selectTextInCell(cell);
                });
            });
        });

		 // 모든 class="species"인 td에 클릭 이벤트 추가
        document.addEventListener("DOMContentLoaded", function() {
            var speciesCells = document.querySelectorAll("td.species");
            speciesCells.forEach(function(cell) {
                cell.addEventListener("click", function() {
                    selectTextInCell(cell);
                });
            });
        });


function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    var button = document.querySelector('.menu-button');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        button.innerHTML = '▶<br>▶<br>▶';
    } else {
        menu.classList.add('open');
        button.innerHTML = '◀<br>◀<br>◀';
    }
}
