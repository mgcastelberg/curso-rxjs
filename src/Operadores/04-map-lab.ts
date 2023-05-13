import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
<h1>Lorem Ipsum</h1>
<hr>
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
<br><br>
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ipsum ligula, facilisis sed mollis in, consectetur posuere dolor. Fusce nunc elit, imperdiet mollis auctor nec, commodo vitae libero. Nulla vitae nulla felis. Duis semper neque eu iaculis scelerisque. Pellentesque in sem ac sapien fringilla bibendum ac eu metus. Suspendisse non enim malesuada, mattis odio ac, interdum nisl. Sed auctor, massa id mollis eleifend, risus nisi porttitor turpis, vel tincidunt risus nulla et lacus. Sed imperdiet mattis lorem, vitae maximus erat tincidunt quis. In dapibus facilisis massa nec facilisis. Duis ut leo in turpis convallis tempor. Cras pulvinar turpis ac quam pharetra, eu lobortis dolor laoreet. Praesent sollicitudin consequat felis molestie eleifend. Nulla bibendum accumsan gravida. Suspendisse tempus lorem purus, venenatis pharetra arcu eleifend vitae. Nam ullamcorper hendrerit tincidunt. Morbi sem felis, tempus vitae ligula sit amet, congue interdum sem.
<br><br>
Donec sit amet arcu eleifend, congue nulla et, maximus odio. Nunc eu neque lorem. Fusce hendrerit ante non tempus porttitor. Suspendisse elementum dui ut elit lobortis posuere. Sed nec interdum magna. Proin non lectus felis. Maecenas malesuada eget est vitae dignissim. Vivamus in enim eu libero efficitur efficitur nec malesuada turpis. Nulla fermentum consectetur nulla. Suspendisse bibendum massa nunc, in fermentum mauris ornare eget. Integer nec ex semper, hendrerit est ac, finibus erat. Donec vel imperdiet nisl, eu tristique nunc. Etiam lacus dui, rutrum eget pharetra vehicula, consectetur at arcu. Phasellus ac aliquet orci.
<br><br>
Curabitur eleifend tempor dui ut tempor. Nulla nec dictum enim, eget luctus nibh. Donec sed consequat lectus, id commodo sapien. Nulla eget posuere eros, sed euismod velit. Nulla dui nibh, tristique nec consectetur sed, pellentesque non est. Phasellus fringilla diam sed tellus convallis scelerisque. Integer tortor purus, ullamcorper eget semper non, semper at massa. Morbi et libero sed mi fermentum accumsan. Suspendisse non magna ut lacus ultricies euismod id at turpis. Vivamus finibus arcu eget nulla feugiat vehicula.
<br><br>
Ut vel nisi rhoncus, vehicula massa ac, volutpat justo. Nunc orci nulla, scelerisque quis quam eu, facilisis sagittis eros. Sed vestibulum libero metus, sed ultrices est pretium a. Nulla pharetra euismod ex eu iaculis. Suspendisse nec sodales felis, at dignissim elit. Sed justo augue, lobortis sit amet vestibulum et, mollis non mi. Mauris eleifend, ligula non iaculis auctor, sapien nunc sagittis erat, ut fermentum libero eros sed nibh. Aenean molestie, lacus semper viverra mollis, augue mi ornare tellus, et euismod magna purus in purus. Sed mollis fermentum dolor, scelerisque efficitur mi sodales vitae. Vivamus tincidunt elit in erat efficitur bibendum. Nulla sed scelerisque erat, at fermentum lacus. Nam odio erat, rutrum in elementum at, consequat et nisl. Morbi at cursus velit. Nullam tincidunt velit a nulla vulputate viverra id eu risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br><br>
Maecenas fermentum rhoncus magna, sed tempor justo mattis mattis. Fusce euismod sapien metus, a sollicitudin enim elementum id. Aliquam erat volutpat. Sed condimentum fringilla consequat. Praesent quis elementum massa, vitae laoreet urna. In placerat turpis quis efficitur vehicula. Phasellus sagittis dictum felis id pretium. Nulla vitae rutrum ex. In euismod et eros non maximus. Curabitur faucibus ante sollicitudin risus auctor maximus. Aliquam odio tortor, facilisis nec bibendum in, cursus nec lectus. Mauris in euismod ex, id faucibus libero. Morbi nec aliquet velit. Suspendisse cursus fermentum nisi ac maximus.
Generated 5 paragraphs, 542 words, 3686 bytes of Lorem Ipsum
<br><br>
Nullam dictum lorem at tempor tempus. Morbi in dolor nec felis suscipit malesuada. Vivamus ac faucibus dui. Sed aliquet gravida mauris, eget sagittis neque sagittis ut. Curabitur dictum, nisl ac dignissim tempus, leo est vulputate metus, vitae laoreet nisi dui eu arcu. Mauris ante est, placerat id vehicula eu, tempus ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nam aliquam magna quis condimentum scelerisque. Nulla viverra tristique rhoncus. Suspendisse ut augue eleifend, mattis est non, pharetra dolor. Integer egestas libero ante, et ultrices tortor malesuada non. Nunc pretium, velit ut lobortis mollis, leo est suscipit dolor, in pulvinar augue diam sed eros. Integer pellentesque viverra tincidunt. Duis in mollis libero.
<br><br>
Maecenas tincidunt purus eros, eu volutpat eros tempus ut. Maecenas volutpat est vel semper pharetra. Nunc facilisis lorem a ultrices tincidunt. Morbi dapibus enim non nulla semper, vitae lobortis eros sagittis. Phasellus enim purus, consectetur in nibh facilisis, viverra cursus neque. Suspendisse vehicula ipsum at scelerisque finibus. Praesent egestas viverra imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras a augue quis neque eleifend scelerisque id ac arcu. Quisque porta lorem mattis egestas tincidunt. Nulla porta luctus imperdiet. Cras eu mollis nibh, eget molestie elit.
<br><br>
Mauris eu eros lectus. Donec volutpat, ligula at faucibus accumsan, elit erat commodo mauris, eu suscipit enim felis nec nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem elit, consectetur eu accumsan eu, bibendum eget nulla. Morbi hendrerit orci sit amet mauris iaculis auctor. Etiam venenatis blandit convallis. Cras pretium nisl et ante ultricies consectetur. Ut feugiat cursus turpis, eu fringilla sapien hendrerit condimentum. Pellentesque tempus diam at volutpat fermentum. Praesent ac nibh nunc. Maecenas eget scelerisque orci, nec malesuada risus. Maecenas vitae nulla nec est varius scelerisque. Donec imperdiet sit amet eros id malesuada. Quisque eget lacinia velit.
<br><br>
Vivamus et justo ex. Suspendisse convallis id dui eu posuere. Sed feugiat, massa vitae rhoncus viverra, nibh sem faucibus tortor, sed dictum tortor odio ut diam. Sed efficitur aliquam nunc, non mollis ante varius sed. Vivamus et libero odio. Nulla magna nisl, facilisis ac sem eu, gravida semper urna. Donec placerat, odio accumsan hendrerit ornare, turpis augue posuere odio, vel mollis mauris libero vitae lectus. Praesent auctor eget sem sit amet luctus. Quisque quis mattis erat. Aenean lacinia et nisl id ultrices. Pellentesque varius libero justo, et placerat lorem bibendum in. Aliquam quis lectus pretium, porta turpis sed, consectetur velit. Etiam eu tortor ipsum. 
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim risus ac lectus interdum rhoncus. Curabitur diam nisi, sagittis ac elementum a, consequat quis est. Sed in imperdiet dui, eu dictum elit. Aliquam rhoncus ante justo, ac ullamcorper purus dictum non. Ut consectetur tortor turpis, a viverra eros elementum non. Nulla lobortis porta justo, non efficitur felis pellentesque eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in enim arcu. Praesent sapien libero, dictum ut risus sed, dictum porttitor turpis. Nam porttitor imperdiet urna, sit amet blandit tortor ornare tempor. In accumsan, sapien non hendrerit consectetur, massa est tempor ipsum, a porttitor mauris tortor mattis odio. Aenean gravida purus nunc, et aliquam nunc tempor eget. Aliquam erat volutpat.
<br><br>
Etiam nec mauris neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed viverra pulvinar mi eu feugiat. Donec dignissim sem mollis, eleifend felis sodales, tincidunt justo. Nam metus est, sollicitudin non porttitor id, dictum in turpis. Ut sollicitudin ullamcorper ligula eget tempor. Sed nibh odio, finibus vitae diam a, facilisis luctus enim. Aenean quis quam vulputate, lacinia justo in, dictum purus. Vestibulum vehicula elementum laoreet. Praesent arcu lacus, suscipit vel metus sed, placerat dignissim ante. Praesent id pharetra est. Suspendisse eget accumsan metus.
<br><br>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vitae mauris est. Nullam placerat blandit urna eget feugiat. Aliquam erat volutpat. Proin efficitur accumsan scelerisque. Nulla facilisi. Vestibulum quis eros varius neque blandit vehicula eget quis neque. Pellentesque imperdiet ultricies lectus quis placerat. Donec cursus imperdiet turpis non faucibus. Etiam congue aliquam lorem, id lacinia nisl consequat vitae. Nunc luctus, dolor tincidunt faucibus molestie, leo quam ultricies lacus, quis semper libero risus vel felis. In eu malesuada dolor. Sed laoreet mauris eget sapien interdum, et accumsan augue mattis.
<br><br>
Curabitur ut porttitor nisl. Phasellus rhoncus fermentum ex, vel vestibulum nibh tempor et. Donec posuere luctus nunc vitae pharetra. Nunc tempus sapien a quam sollicitudin efficitur. Praesent vulputate magna a lobortis blandit. Donec rutrum leo in commodo gravida. Curabitur aliquam mauris eget mauris aliquet, eget vestibulum augue gravida. Duis bibendum metus quis arcu rhoncus, id cursus ipsum posuere. Curabitur nec quam purus. Ut mollis porta pellentesque.
<br><br>
Nunc non blandit ante. Integer suscipit egestas sapien nec ornare. Quisque commodo in sem malesuada condimentum. In posuere egestas eros ac tincidunt. Proin ac ullamcorper mauris. Mauris vulputate massa vel dolor pretium, eget dignissim nisl luctus. Fusce euismod rutrum leo, quis tincidunt erat pellentesque quis. Sed in lectus ipsum. Nulla venenatis libero rhoncus blandit sollicitudin. Proin facilisis libero quis arcu sagittis pretium.
<br><br>
Quisque tempor, erat ut condimentum malesuada, ante velit tincidunt dui, sed venenatis tortor dolor sit amet mi. Nunc justo diam, fermentum aliquam lorem at, luctus auctor turpis. Donec fermentum quam vel nibh varius lacinia. Proin at consequat urna, at ultricies nulla. Sed molestie at magna vitae porta. Aliquam ac blandit diam. Nam tempus ipsum in velit fringilla, eu aliquam turpis condimentum.
<br><br>
Praesent pellentesque at mi a tincidunt. Morbi vel felis quis urna cursus auctor. Vestibulum egestas odio ut lacus sollicitudin mollis volutpat ut justo. Nam auctor velit in ante pharetra, et placerat lorem posuere. Sed eu ornare dui, eu tempus dui. Maecenas ut sapien mauris. Phasellus semper nisl id libero tempor tempor. Sed sit amet posuere dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sollicitudin dictum purus. Ut eget velit mattis, viverra lorem id, consequat risus. Cras accumsan non ex at eleifend. Praesent eu diam non mi dictum pretium eu ac metus. Sed laoreet, leo ac cursus pulvinar, urna lorem mollis risus, at finibus mi arcu varius eros.
<br><br>
Vestibulum aliquet neque quis sem facilisis tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tempus felis vel risus feugiat dignissim. Etiam maximus rutrum ligula, at dignissim urna tempor quis. Nullam congue dignissim accumsan. Maecenas at ornare nisi. Nam maximus porta elit, ut hendrerit nunc fringilla vitae. Integer consequat quam dui, ac convallis ligula condimentum sed.
<br><br>
Sed non hendrerit lacus. Pellentesque porta nisl ac leo mollis porta. Cras aliquet bibendum posuere. Donec sit amet tortor aliquet, finibus tellus in, rutrum orci. Sed suscipit mi et felis vehicula iaculis. Ut quis facilisis orci, vitae efficitur ante. Etiam tempus tempus justo, sit amet hendrerit odio euismod et. Pellentesque quam nisi, maximus a turpis sed, pellentesque placerat sem. Duis nulla purus, varius ut tempus nec, convallis in quam. Integer faucibus vitae tellus vel faucibus. Nunc a urna viverra, hendrerit arcu in, dapibus felis. Nunc mollis eleifend ligula dapibus fringilla.
<br><br>
Vestibulum non congue massa. Praesent hendrerit eros a varius lobortis. Etiam sodales laoreet erat, quis pulvinar metus. Phasellus id vulputate lorem. Nulla nec mi non tortor porttitor vehicula sed ac lectus. Etiam a placerat massa, sed aliquam enim. Aenean ut nisl eget ante ultrices convallis sit amet sit amet ipsum. Cras id nibh vel enim elementum volutpat maximus id leo. Curabitur sollicitudin luctus nisl. Integer rhoncus elit in feugiat viverra. Cras et eros consequat, pulvinar mauris nec, ultrices orci. Ut lacinia lectus eros, ac venenatis nisl accumsan at.
<br><br>
Duis dictum non odio ut aliquam. Donec vitae suscipit augue, ut sagittis libero. Maecenas facilisis, nunc vel tempor luctus, dolor risus venenatis sapien, sit amet lacinia mauris elit at eros. Cras porttitor bibendum nulla. Cras varius faucibus eros, at mollis risus suscipit sit amet. Mauris dictum, mi eu ultricies rutrum, lorem urna vulputate elit, eu interdum sem dolor et ante. Suspendisse tincidunt dapibus elementum. Sed enim turpis, interdum sed tellus commodo, porta tempus nisi. Phasellus id ex dictum augue tempor viverra in non dolor. Fusce auctor libero a molestie faucibus. Aliquam quis rutrum dolor. Etiam feugiat ac felis eget suscipit.
<br><br>
Integer ut lacus tincidunt, placerat mauris nec, placerat purus. Nullam metus enim, varius quis viverra in, tempor id leo. Fusce sit amet faucibus magna, et maximus turpis. In aliquam leo et aliquam aliquam. Sed facilisis dui nisl, eget iaculis risus dignissim vel. Praesent facilisis sit amet sapien a blandit. Duis facilisis leo maximus diam mattis faucibus. Sed at ligula eget tortor rhoncus euismod nec commodo metus. Suspendisse dapibus turpis at ornare malesuada. Maecenas feugiat, enim faucibus finibus accumsan, libero quam feugiat orci, eget malesuada enim velit sed est.
<br><br>
Vestibulum faucibus, dolor id rutrum faucibus, sapien massa dapibus sem, id dapibus dui sapien sit amet risus. Fusce euismod sodales turpis. Cras arcu turpis, iaculis in suscipit quis, tincidunt egestas est. Quisque at sollicitudin augue. Maecenas efficitur purus et elementum molestie. Nunc orci sem, ullamcorper id nisi sed, dignissim feugiat metus. Pellentesque ut lacus tincidunt, elementum ipsum quis, ullamcorper orci. Praesent vulputate enim eget interdum rhoncus. Proin convallis hendrerit dignissim. Morbi facilisis cursus enim non luctus.
<br><br>
Proin egestas eu orci sed gravida. Curabitur posuere facilisis faucibus. Quisque porta justo nisi, nec cursus elit aliquet in. Cras et augue posuere, ultricies nisi sed, imperdiet nisi. Proin quis tortor enim. Integer aliquet rutrum mi vitae molestie. Phasellus vitae ligula convallis, posuere enim ac, scelerisque neque. Vivamus ultricies metus in libero faucibus tincidunt. Nulla nulla lorem, rutrum vitae porttitor sit amet, cursus et risus. Mauris varius eros elit, ac pulvinar enim dictum et. Sed id risus nibh. Maecenas mauris tortor, molestie nec metus sed, porttitor commodo arcu. Ut tempus sed lorem quis gravida. Morbi nunc risus, ultricies laoreet suscipit a, pretium nec odio. Cras ullamcorper odio id vestibulum efficitur. Vivamus laoreet lobortis bibendum.
<br><br>
Integer eu ante a nisi elementum posuere id at nulla. Suspendisse mattis nibh justo. Donec venenatis eget lectus non scelerisque. Donec ac varius turpis. Nunc at lorem laoreet, aliquet metus id, efficitur dolor. Nunc pulvinar felis risus, sed faucibus felis placerat eu. Nulla fermentum nulla suscipit tortor pulvinar, sed placerat risus condimentum. Etiam dignissim massa dui, nec tempor sem convallis tincidunt. Vivamus et varius felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed feugiat justo justo, vel convallis arcu fringilla in.
<br><br>
Sed eget quam nulla. Curabitur laoreet consectetur cursus. Integer tristique eros sit amet felis egestas, id laoreet lacus sollicitudin. Praesent porttitor eros id ante porta feugiat. Praesent varius lacinia sagittis. Aenean mollis placerat mollis. Cras dictum sollicitudin placerat.
<br><br>
Cras cursus odio velit, vulputate sagittis mauris dignissim sit amet. Quisque tincidunt orci nec augue viverra pharetra. Aliquam sit amet vehicula velit. Nam faucibus luctus dolor non vulputate. Pellentesque tristique sapien in metus accumsan bibendum. Quisque lobortis ac odio eu hendrerit. Duis efficitur sapien quis neque tincidunt pharetra. In hac habitasse platea dictumst. Mauris vel dictum nisl, eget venenatis ligula. Fusce ut convallis nibh. Praesent vitae fermentum nisi, a rhoncus turpis. Sed ut sapien imperdiet, efficitur ipsum at, faucibus odio. Curabitur nec luctus ante.
<br><br>
Cras viverra dolor at purus finibus scelerisque. Nunc interdum, neque at iaculis luctus, felis tortor tristique magna, eu euismod dui leo at quam. Vivamus a risus ac odio semper fringilla vitae nec orci. Ut porttitor orci congue dignissim interdum. Morbi aliquam leo massa. Sed luctus nunc at magna faucibus, ut auctor turpis lobortis. Nulla finibus commodo nunc, et laoreet tellus fermentum a. Aliquam accumsan risus eros, eu volutpat leo malesuada a. Donec mollis, augue in aliquet pharetra, leo quam feugiat diam, sed porta turpis est non quam. Aliquam erat volutpat. Donec aliquet ac mi vel accumsan.
<br><br>
In vitae lacinia orci. Nunc ac ornare sapien, ac eleifend nulla. Sed non diam ac tortor eleifend varius a ut metus. Fusce a odio quis odio facilisis commodo nec sed dolor. Maecenas sollicitudin quam dictum nunc ultricies, at elementum lorem euismod. Suspendisse vestibulum in diam fermentum posuere. Mauris ac augue quis lorem sollicitudin eleifend. Cras et risus non arcu faucibus rhoncus vitae id leo. Vivamus faucibus, dolor id sagittis mollis, nibh dolor gravida odio, varius facilisis ante turpis sit amet ex.
<br><br>
Vivamus vehicula, metus eu euismod tincidunt, ex nibh tincidunt elit, nec pretium magna nulla at justo. In maximus ut est id aliquam. Vivamus vestibulum arcu ut porttitor auctor. Nulla facilisi. In molestie nunc sem, ut malesuada orci elementum consectetur. Quisque porttitor tempus nisi, id bibendum enim pellentesque vitae. Nam et elit vitae ex pretium mattis. Integer non dignissim elit, non rhoncus magna.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');

progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

// funcion que haga el calculo 
const calcularPorcentajeScroll = ( event ) => {
    // console.log(event);
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // console.log({scrollTop,scrollHeight,clientHeight});
    return ( scrollTop / (scrollHeight - clientHeight) * 100 );
}

// observable
const scroll$ =  fromEvent( document,'scroll');
// scroll$.subscribe( e => console.log(e));


const progress$ = scroll$.pipe(
    // llamamos la funcion que calculara el evento
    // map( event  => calcularPorcentajeScroll( event ) )
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje }%`;

});