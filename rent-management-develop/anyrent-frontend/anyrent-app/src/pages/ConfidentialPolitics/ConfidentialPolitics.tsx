import { ARFooter, ARHeader } from "../../library";
import "./confidentialPolitics.less";

interface ConfidentialPoliticsProps {

}

const ConfidentialPolitics = (props: ConfidentialPoliticsProps) => {
  return (
    <div className="terms-rights-wrappen ">

      <div className="terms-rights__header">
        <ARHeader />
      </div>

      <div className="terms-rights__content">
        <div className="terms-rights__content-container">
            <h1 className="terms-rights__h1"> ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ </h1>
            <div className="terms-rights__dockheader">
                <div className="">
                    <h3 className="terms-rights__h3"> г. Воронеж</h3>
                </div>
                <div className="">
                    <h3 className="terms-rights__h3"> "6" мая 2023г.</h3>
                </div>
            </div>
            <h3 className="terms-rights__h3">
                Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую сервис аренд AnyRent,
                расположенный на доменном имени www.anyrent.ru, может получить о Пользователе во время использования сайта сервиса аренд, программ и продуктов сервиса-аренд.
            </h3>
            <h2 className="terms-rights__h2"> 1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ </h2>
            <h3 className="terms-rights__h3">
                1.1 В настоящей Политике конфиденциальности используются следующие термины:
            </h3>
            <h3 className="terms-rights__h3">
                1.1.1. «Администрация сайта Интернет-магазина (далее – Администрация сайта) » – уполномоченные сотрудники на управления сайтом, действующие от имени AnyRent Inc., которые организуют 
                и (или) осуществляет обработку персональных данных, а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, 
                действия (операции), совершаемые с персональными данными.
            </h3>
            <h3 className="terms-rights__h3">
                1.1.2. «Персональные данные» - любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
            </h3>
            <h3 className="terms-rights__h3">
                1.1.3. «Обработка персональных данных» - любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или 
                без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), 
                извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
            </h3>
            <h3 className="terms-rights__h3">
                1.1.4. «Конфиденциальность персональных данных» - обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом 
                требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.
            </h3>
            <h3 className="terms-rights__h3">
                1.1.5. «Пользователь сайта сервиса аренд AnyRent (далее ? Пользователь)» – лицо, имеющее доступ к Сайту, посредством сети Интернет и использующее Сайт сервиса аренд AnyRent.
            </h3>
            <h3 className="terms-rights__h3">
                1.1.6. «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя, который веб-клиент или веб-браузер каждый 
                раз пересылает веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта.
            </h3>
            <h3 className="terms-rights__h3">
                1.1.7. «IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, построенной по протоколу IP.
            </h3>
            
            <h2 className="terms-rights__h2"> 2. ОБЩИЕ ПОЛОЖЕНИЯ </h2>

            <h3 className="terms-rights__h3">
                2.1. Использование Пользователем сайта сервиса аренд AnyRent означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя
            </h3>
            <h3 className="terms-rights__h3">
                2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта сервиса аренд AnyRent.
            </h3>
            <h3 className="terms-rights__h3">
                2.3.Настоящая Политика конфиденциальности применяется только к сайту cервиса аренд AnyRent. Сервис аренд AnyRent не контролирует и не несет ответственность за сайты третьих лиц, на 
                которые Пользователь может перейти по ссылкам, доступным на сайте сервиса аренд.
            </h3>
            <h3 className="terms-rights__h3">
                2.4. Администрация сайта не проверяет достоверность персональных данных, предоставляемых Пользователем сайта сервиса аренд.
            </h3>
            
            <h2 className="terms-rights__h2"> 3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ </h2>

            <h3 className="terms-rights__h3">
                3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта сервиса аренд AnyRent по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь 
                предоставляет по запросу Администрации сайта при регистрации на сайте сервиса аренд или при оформлении заказа для аренды Товара.
            </h3>
            <h3 className="terms-rights__h3">
                3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения регистрационной 
                формы на Сайте сервиса аренд AnyRent в разделе Название раздела и включают в себя следующую информацию:
            </h3>
            <h3 className="terms-rights__h3">
                3.2.1. фамилию, имя, отчество Пользователя;
            </h3>
            <h3 className="terms-rights__h3">
                3.2.2. контактный телефон Пользователя;
            </h3>
            <h3 className="terms-rights__h3">
                3.2.3. адрес электронной почты (e-mail);
            </h3>
            <h3 className="terms-rights__h3">
                3.2.4. адрес доставки Товара;
            </h3>
            <h3 className="terms-rights__h3">
                3.2.5. место жительство Пользователя.
            </h3>
            <h3 className="terms-rights__h3">
                3.3. Интернет-магазин защищает Данные, которые автоматически передаются в процессе просмотра рекламных блоков и при посещении страниц, на которых установлен 
                статистический скрипт системы ("пиксель"):
            </h3>
            <h3 className="terms-rights__h3">
                <ul className="confidential__ul">
                    <li className="confidential__li">IP адрес;</li>
                    <li className="confidential__li">информация из cookies;</li>
                    <li className="confidential__li">информация о браузере (или иной программе, которая осуществляет доступ к показу рекламы);</li>
                    <li className="confidential__li">время доступа;</li>
                    <li className="confidential__li">адрес страницы, на которой расположен рекламный блок;</li>
                    <li className="confidential__li">реферер (адрес предыдущей страницы).</li>
                </ul>
            </h3>
            <h3 className="terms-rights__h3">
                3.3.1. Отключение cookies может повлечь невозможность доступа к частям сайта Интернет-магазина, требующим авторизации.
            </h3>
            <h3 className="terms-rights__h3">
                3.3.2. Интернет-магазин осуществляет сбор статистики об IP-адресах своих посетителей. Данная информация используется с целью выявления и решения технических 
                проблем, для контроля законности проводимых финансовых платежей.
            </h3>
            <h3 className="terms-rights__h3">
                3.4. Любая иная персональная информация неоговоренная выше (история покупок, используемые браузеры и операционные системы и т.д.) 
                подлежит надежному хранению и нераспространению, за исключением случаев, предусмотренных в п.п. 5.2. и 5.3. настоящей Политики конфиденциальности.
            </h3>

            <h2 className="terms-rights__h2"> 4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ </h2>

            <h3 className="terms-rights__h3">
                4.1. Персональные данные Пользователя Администрация сайта сервиса аренд может использовать в целях:
            </h3>
            <h3 className="terms-rights__h3">
                4.1.1. Идентификации Пользователя, зарегистрированного на сайте сервиса аренд, для оформления заказа и (или) заключения Договора аренды 
                товара дистанционным способом с AnyRent сервиса аренд.
            </h3>
            <h3 className="terms-rights__h3">
                4.1.2. Предоставления Пользователю доступа к персонализированным ресурсам Сайта сервиса аренд.
            </h3>
            <h3 className="terms-rights__h3">
                4.1.3. Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта сервиса аренд, оказания 
                услуг, обработка запросов и заявок от Пользователя.
            </h3>
            <h3 className="terms-rights__h3">
                4.1.4. Определения места нахождения Пользователя для обеспечения безопасности, предотвращения мошенничества.
            </h3>
            <h3 className="terms-rights__h3">
                4.1.5. Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем.
            </h3>
            <h3 className="terms-rights__h3">
                4.1.6. Создания учетной записи для совершения покупок, если Пользователь дал согласие на создание учетной записи.
            </h3>
            <h3 className="terms-rights__h3">
                4.1.7. Уведомления Пользователя Сайта сервиса аренд о состоянии Заказа.
            </h3>
            <h3 className="terms-rights__h3">
                 4.1.8. Обработки и получения платежей, подтверждения налога или налоговых льгот, оспаривания платежа, определения права на получение кредитной линии Пользователем.
            </h3>
            <h3 className="terms-rights__h3">
                4.1.9. Предоставления Пользователю эффективной клиентской и технической поддержки при возникновении проблем связанных с использованием Сайта сервиса аренд.
            </h3>
            <h3 className="terms-rights__h3">
                4.1.10. Предоставления Пользователю с его согласия, обновлений продукции, специальных предложений, информации о ценах, новостной рассылки и иных сведений 
                от имени сервиса аренд AnyRent или от имени партнеров сервиса аренд AnyRent.
            </h3>
            <h3 className="terms-rights__h3">
                4.1.11. Осуществления рекламной деятельности с согласия Пользователя.
            </h3>
            <h3 className="terms-rights__h3">
                4.1.12. Предоставления доступа Пользователю на сайты или сервисы партнеров сервиса аренд AnyRent с целью получения продуктов, обновлений и услуг.
            </h3>

            <h2 className="terms-rights__h2"> 5. СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>

            <h3 className="terms-rights__h3">
                5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах 
                персональных данных с использованием средств автоматизации или без использования таких средств.
            </h3>
            <h3 className="terms-rights__h3">
                5.2. Пользователь соглашается с тем, что Администрация сайта вправе передавать персональные данные третьим лицам, в частности, курьерским службам, 
                организациями почтовой связи, операторам электросвязи, исключительно в целях выполнения заказа Пользователя, оформленного на 
                Сайте сервиса аренд AnyRent, включая доставку Товара.
            </h3>
            <h3 className="terms-rights__h3">
                5.3. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Российской Федерации только 
                по основаниям и в порядке, установленным законодательством Российской Федерации.
            </h3>
            <h3 className="terms-rights__h3">
                5.4. При утрате или разглашении персональных данных Администрация сайта информирует Пользователя об утрате или разглашении персональных данных.
            </h3>
            <h3 className="terms-rights__h3">
                5.5. Администрация сайта принимает необходимые организационные и технические меры для защиты персональной информации Пользователя 
                от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
            </h3>
            <h3 className="terms-rights__h3">
                5.6. Администрация сайта совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных 
                отрицательных последствий, вызванных утратой или разглашением персональных данных Пользователя.
            </h3>

            <h2 className="terms-rights__h2"> 6. ОБЯЗАТЕЛЬСТВА СТОРОН </h2>

            <h3 className="terms-rights__h3">
                6.1. Пользователь обязан:
            </h3>
            <h3 className="terms-rights__h3">
                6.1.1. Предоставить информацию о персональных данных, необходимую для пользования Сайтом сервиса аренд AnyRent.
            </h3>
            <h3 className="terms-rights__h3">
                6.1.2. Обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации.
            </h3>
            <h3 className="terms-rights__h3">
                6.2. Администрация сайта обязана:
            </h3>
            <h3 className="terms-rights__h3">
                6.2.1. Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики конфиденциальности.
            </h3>
            <h3 className="terms-rights__h3">
                6.2.2. Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя, 
                а также не осуществлять продажу, обмен, опубликование, либо разглашение иными возможными способами переданных персональных данных Пользователя, 
                за исключением п.п. 5.2. и 5.3. настоящей Политики Конфиденциальности.
            </h3>
            <h3 className="terms-rights__h3">
                6.2.3. Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя согласно порядку, 
                обычно используемого для защиты такого рода информации в существующем деловом обороте.
            </h3>
            <h3 className="terms-rights__h3">
                6.2.4. Осуществить блокирование персональных данных, относящихся к соответствующему Пользователю, с момента обращения или запроса Пользователя или его законного представителя 
                либо уполномоченного органа по защите прав субъектов персональных данных на период проверки, в случае выявления недостоверных персональных данных или неправомерных действий.
            </h3>

            <h2 className="terms-rights__h2"> 7. ОТВЕТСТВЕННОСТЬ СТОРОН </h2>
            <h3 className="terms-rights__h3">
                7.1. Администрация сайта, не исполнившая свои обязательства, несёт ответственность за убытки, понесённые Пользователем в связи с неправомерным использованием персональных данных, 
                в соответствии с законодательством Российской Федерации, за исключением случаев, предусмотренных п.п. 5.2., 5.3. и 7.2. настоящей Политики Конфиденциальности.
            </h3>
            <h3 className="terms-rights__h3">
                7.2. В случае утраты или разглашения Конфиденциальной информации Администрация сайта не несёт ответственность, если данная конфиденциальная информация:
            </h3>
            <h3 className="terms-rights__h3">
                7.2.1. Стала публичным достоянием до её утраты или разглашения.
            </h3>
            <h3 className="terms-rights__h3">
                7.2.2. Была получена от третьей стороны до момента её получения Администрацией сайта.
            </h3>
            <h3 className="terms-rights__h3">
                7.2.3. Была разглашена с согласия Пользователя.
            </h3>

            <h2 className="terms-rights__h2"> 8. РАЗРЕШЕНИЕ СПОРОВ </h2>
            <h3 className="terms-rights__h3">
                8.1. До обращения в суд с иском по спорам, возникающим из отношений между Пользователем сайта сервиса аренд AnyRent и Администрацией сайта, 
                обязательным является предъявление претензии (письменного предложения о добровольном урегулировании спора).
            </h3>
            <h3 className="terms-rights__h3">
                8.2 .Получатель претензии в течение 30 календарных дней со дня получения претензии, 
                письменно уведомляет заявителя претензии о результатах рассмотрения претензии.
            </h3>
            <h3 className="terms-rights__h3">
                8.3. При не достижении соглашения спор будет передан на рассмотрение в судебный орган в 
                соответствии с действующим законодательством Российской Федерации.
            </h3>
            <h3 className="terms-rights__h3">
                8.4. К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией сайта применяется действующее законодательство Российской Федерации.
            </h3>

            <h2 className="terms-rights__h2"> 9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ </h2>
            <h3 className="terms-rights__h3">
                9.1. Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.
            </h3>
            <h3 className="terms-rights__h3">
                9.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте сервиса аренд AnyRent, если иное не предусмотрено новой редакцией Политики конфиденциальности.
            </h3>
            <h3 className="terms-rights__h3">
                9.3. Все предложения или вопросы по настоящей Политике конфиденциальности следует сообщать указать раздел сайта сервиса аренд AnyRent
            </h3>
            <h3 className="terms-rights__h3">
                9.4. Действующая Политика конфиденциальности размещена на странице по адресу www.anyrent.ru/confidentialy.
            </h3>
            <h3 className="terms-rights__h3">

            </h3>
            <h3 className="terms-rights__h3">
                Обновлено 19 мая 2022г.
            </h3>      
        </div>
      </div>

      <div className="terms-rights__footer">
        <ARFooter />
      </div>

    </div>
  );
};

export default ConfidentialPolitics;