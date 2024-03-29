import { ARFooter, ARHeader } from "../../library";
import "./termsRights.less";

interface TermsRightsProps {

}

const TermsRights = (props: TermsRightsProps) => {
  return (
    <div className="terms-rights-wrappen ">

      <div className="terms-rights__header">
        <ARHeader />
      </div>

      <div className="terms-rights__content">
        <div className="terms-rights__content-container">
            <h1 className="terms-rights__h1"> ДОГОВОР АРЕНДЫ ОБОРУДОВАНИЯ </h1>
            <div className="terms-rights__dockheader">
                <div className="">
                    <h3 className="terms-rights__h3"> г. ___________________</h3>
                </div>
                <div className="">
                    <h3 className="terms-rights__h3"> "__"____________2023г.</h3>
                </div>
            </div>
            <h3 className="terms-rights__h3"> Гр._______________ , паспорт: серия ________ , № ______, выданный _________, 
                проживающий по адресу: _________, именуемый в дальнейшем «Арендодатель», с одной стороны, и ____________  в лице 
                _____________, действующего на основании ___________, именуемый в дальнейшем «Арендатор», с другой стороны, 
                именуемые в дальнейшем «Стороны», заключили настоящий договор, в дальнейшем «Договор», о нижеследующем :
            </h3>
            <h2 className="terms-rights__h2"> 1. ПРЕДМЕТ ДОГОВОРА </h2>
            <h3 className="terms-rights__h3">
                1.1. Арендодатель обязуется предоставить во временное владение и пользование, а Арендатор – принять, 
                оплатить пользование и своевременно возвратить технические средства в соответствии с перечнем, являющимся приложением №1 к Договору.
            </h3>
            <h3 className="terms-rights__h3">
                1.2. Назначение и использование технических средств: для ______________
            </h3>
            <h3 className="terms-rights__h3">
                1.3. Технические средства передаются в аренду в исправном состоянии со всей технической документацией (далее – оборудование).
                 Продукция и доходы, полученные Арендатором в результате использования арендованного оборудования, являются собственностью Арендатора.
            </h3>
            <h3 className="terms-rights__h3">
                1.4. На момент заключения договора оборудование, сдаваемое в аренду, принадлежит Арендодателю на праве собственности, 
                что подтверждается ___________  от «___» ________ 2020г., ______________ , не заложено или арестовано, не является предметом исков третьих лиц.
            </h3>
            <h3 className="terms-rights__h3">
                1.3. Передаваемое в аренду оборудование находится в нормальном состоянии, отвечающем требованиям, предъявляемым к такого рода оборудованию 
                в соответствии с назначением арендуемого объекта.
            </h3>
            <h3 className="terms-rights__h3">
                1.4. Без согласия Арендодателя указанное оборудование не может быть сдано Арендатором в субаренду или пользование иным лицам.
            </h3>
            <h3 className="terms-rights__h3">
                1.5. Арендодатель вправе потребовать расторжения договора и возмещения убытков в случаях, когда им будут установлены 
                факты использования оборудования не в соответствии с условиями договора аренды или его назначением.
            </h3>
            <h3 className="terms-rights__h3">
                1.6. Арендодатель несет ответственность за недостатки сданного им в аренду по договору оборудования, полностью или частично препятствующие 
                пользованию им, несмотря на то, что при сдаче его в аренду (или при заключении договора) Арендодатель мог и не знать о наличии указанных недостатков.
            </h3>
            <h3 className="terms-rights__h3">
                1.7. В случаях существенного нарушения Арендатором установленного договором порядка внесения арендной платы (сроков платежей) Арендодатель может 
                потребовать от Арендатора досрочного внесения арендной платы в установленный Арендодателем срок, но не более чем за два срока плановых платежей подряд.
            </h3>
            <h3 className="terms-rights__h3">
                1.8. Стороны определили, что Арендатор, надлежащим образом исполнявший свои обязательства по договору, при прочих равных условиях 
                пользуется преимущественным правом на заключение договора аренды на новый срок по истечении срока действия данного договора.
            </h3>
            <h3 className="terms-rights__h3">
                1.9. Договор считается заключенным с момента подписания его сторонами и передачи Арендатору оборудования по акту приема-передачи. 
                В акте приема-передачи указываются принадлежности и запасные части оборудования, ключи, документы и т.п.
            </h3>
            
            <h2 className="terms-rights__h2"> 2. ПОРЯДОК ПРЕДОСТАВЛЕНИЯ И ВОЗВРАТА ОБОРУДОВАНИЯ </h2>

            <h3 className="terms-rights__h3">
                2.1. Оборудование предоставляется на срок ___________  . Арендатор вправе продлить срок аренды на ________ , о чем он обязан сообщить 
                Арендодателю не позднее, чем за _____ дней до окончания срока аренды.
            </h3>
            <h3 className="terms-rights__h3">
                2.2. Арендодатель обязан предоставить оборудование в исправном состоянии, комплектно, с проверкой приборов и отметкой об их соответствии техническим параметрам.
            </h3>
            <h3 className="terms-rights__h3">
                2.3. Арендатор выделяет представителя для получения и возврата оборудования, который проверяет его исправное состояние и комплектность.
            </h3>
            <h3 className="terms-rights__h3">
                2.4. Представитель Арендатора подписывает обязательство на возврат оборудования. Выдача оборудования производится после получения 
                Арендодателем обязательства Арендатора о возврате оборудования и оплаченного счета за первый квартал.
            </h3>
            <h3 className="terms-rights__h3">
                2.5. Арендодатель обязан обеспечить Арендатора необходимой информацией, технической документацией, а при необходимости направить 
                своего специалиста для обучения и ознакомления с правилами технической эксплуатации оборудования.
            </h3>
            <h3 className="terms-rights__h3">
                2.6. В случае выхода из строя оборудования по причинам, не зависящим от Арендатора, Арендодатель обязан в течение ______  устранить поломку или заменить 
                вышедший из строя предмет исправным. Данный случай удостоверяется двусторонним актом. За время, в течение которого Арендатор 
                не имел возможности пользоваться оборудованием вследствие выхода его из строя, арендная плата не взимается и срок аренды соответственно продлевается.
            </h3>
            <h3 className="terms-rights__h3">
                2.7. Если оборудование вышло из строя вследствие неправильной эксплуатации или хранения его Арендатором, последний производит починку или замену за свой счет.
            </h3>
            <h3 className="terms-rights__h3">
                2.8. Арендатор обязан вывезти оборудование со склада Арендодателя и возвратить его своими силами и за свой счет.
            </h3>
            <h3 className="terms-rights__h3">
                2.9. Арендатор не вправе передавать взятое в аренду оборудование в субаренду, в безвозмездное пользование, передавать 
                свои права и обязанности по договору третьим лицам, отдавать в залог арендные права.
            </h3>
            <h3 className="terms-rights__h3">
                2.10. Арендатор вправе вернуть оборудование досрочно. Арендодатель обязан принять возвращенное досрочно оборудование и 
                вернуть Арендатору соответствующую часть полученной арендной платы, исчисляя ее со дня, следующего за днем фактического возврата оборудования.
            </h3>
            <h3 className="terms-rights__h3">
                2.11. Срок нахождения оборудования в аренде исчисляется со дня, следующего после даты подписания акта передачи оборудования.
            </h3>
            <h3 className="terms-rights__h3">
                2.12. При возврате оборудования производится проверка его комплектности и технический осмотр в присутствии Арендатора, составляется двусторонний акт, который 
                служит подтверждением возврата оборудования и его технического состояния. Если Арендатор отказался подписывать акт, об этом делается соответствующая 
                отметка в акте, который составляется с участием компетентного представителя независимой организации.
            </h3>
            
            <h2 className="terms-rights__h2"> 3. РАСЧЕТЫ </h2>

            <h3 className="terms-rights__h3">
                3.1. Сумма арендной платы за оборудование составляет  ________ рублей ежеквартально (включая все налоги).
            </h3>
            <h3 className="terms-rights__h3">
                3.2. Арендодатель выставляет Арендатору счет, который последний обязан оплатить в течение _____  дней.
            </h3>

            <h2 className="terms-rights__h2"> 4. САНКЦИИ </h2>

            <h3 className="terms-rights__h3">
                4.1. За просрочку уплаты арендной платы в установленный договором срок Арендатор уплачивает 
                Арендодателю пеню в размере  _______% от суммы долга за каждый день просрочки.
            </h3>
            <h3 className="terms-rights__h3">
                4.2. За просрочку предоставления оборудования в установленный заказом срок Арендодатель уплачивает 
                Арендатору пеню в размере  _____ % за каждый день просрочки, а за просрочку свыше  _____ дней – дополнительно 
                зачетную неустойку в размере ______ % стоимости арендной платы.
            </h3>
            <h3 className="terms-rights__h3">
                4.3. За просрочку возврата оборудования или входящих в комплект составных частей в установленный заказом срок Арендатор уплачивает 
                Арендодателю пеню в размере _____ % за каждый день просрочки, а при просрочке свыше _____  дней – дополнительно зачетную 
                неустойку в размере _______ % стоимости невозвращенного в срок оборудования.
            </h3>
            <h3 className="terms-rights__h3">
                4.4. При невозврате оборудования в течение _____  дней со дня окончания срока пользования 
                Арендатор уплачивает Арендодателю _____ -кратную стоимость этого оборудования.
            </h3>
            <h3 className="terms-rights__h3">
                4.5. При возврате неисправного оборудования, поврежденного по вине Арендатора, что подтверждается двусторонним актом, он уплачивает 
                Арендодателю расходы по его ремонту и штраф в размере ______ % стоимости поврежденного оборудования. Если при возврате 
                оборудования установлена некомплектность, Арендатор возмещает Арендодателю фактические затраты на покупку недостающих 
                частей оборудования и штраф в размере  ______ % стоимости недостающих частей.
            </h3>
            <h3 className="terms-rights__h3">
                4.6. За передачу оборудования в пользование другим лицам без письменного разрешения Арендодателя, Арендатор уплачивает Арендодателю 
                штраф в размере ______ % стоимости оборудования.
            </h3>

            <h2 className="terms-rights__h2"> 5. ФОРС-МАЖОР</h2>

            <h3 className="terms-rights__h3">
                5.1. Ни одна из сторон не несет ответственности перед другой стороной за невыполнение 
                обязательств, обусловленных обстоятельствами, возникшими помимо воли и желания сторон и которые нельзя предвидеть 
                или избежать, включая объявленную или фактическую войну, гражданские волнения, эпидемии, пандемии, режим самоизоляции, 
                блокаду, эмбарго, землетрясения, наводнения, пожары и другие стихийные бедствия.
            </h3>
            <h3 className="terms-rights__h3">
                5.2. Сторона, которая не может исполнить своего обязательства, должна известить другую сторону о препятствии 
                и его влиянии на исполнение обязательств по договору в разумный срок.
            </h3>

            <h2 className="terms-rights__h2"> 6. ЗАКЛЮЧИТЕЛЬНАЯ ЧАСТЬ </h2>

            <h3 className="terms-rights__h3">
                6.1. Во всем остальном, не предусмотренном условиями договора стороны руководствуются действующим законодательством РФ.
            </h3>
            <h3 className="terms-rights__h3">
                6.2. Договор составлен в двух экземплярах, имеющих одинаковую юридическую силу, по одному экземпляру для каждой из сторон.
            </h3>
            <h3 className="terms-rights__h3">
                6.3. К договору прилагаются: _________  .
            </h3>

            <h2 className="terms-rights__h2"> 7. ЮРИДИЧЕСКИЕ АДРЕСА И РЕКВИЗИТЫ СТОРОН </h2>

            <div className="terms-rights__table">
                <div className="terms-rights__table-column">
                    <h4 className="terms-rights__h4"> Арендодатель</h4>
                    <h5 className="terms-rights__h5"> Регистрация: _________________________</h5>
                    <h5 className="terms-rights__h5"> Почтовый адрес: _________________________</h5>
                    <h5 className="terms-rights__h5"> Паспрпи серия: _________________________</h5>
                    <h5 className="terms-rights__h5"> Номер: _________________________</h5>
                    <h5 className="terms-rights__h5"> Выдан: _________________________</h5>
                    <h5 className="terms-rights__h5"> Кем: _________________________</h5>
                    <h5 className="terms-rights__h5"> Телефон: _________________________</h5>
                    <h5 className="terms-rights__h5"> _______________________________</h5>
                </div>
                <div className="terms-rights__table-column">
                    <h4 className="terms-rights__h4"> Арендатор</h4>
                    <h5 className="terms-rights__h5"> Юр. адрес:: _________________________</h5>
                    <h5 className="terms-rights__h5"> Почтовый адрес: _________________________</h5>
                    <h5 className="terms-rights__h5"> ИНН: _________________________</h5>
                    <h5 className="terms-rights__h5"> КПП: _________________________</h5>
                    <h5 className="terms-rights__h5"> Банк: _________________________</h5>
                    <h5 className="terms-rights__h5"> Рас./счёт: _________________________</h5>
                    <h5 className="terms-rights__h5"> Корр./счёт:_______________________________</h5>
                    <h5 className="terms-rights__h5"> БИК:_______________________________</h5>
                </div>
            </div>

            <h2 className="terms-rights__h2"> 8. ПОДПИСИ СТОРОН </h2>

            <div className="terms-rights__table">
                <div className="">
                    <h3 className="terms-rights__h3"> Арендодатель __________</h3>
                </div>
                <div className="">
                    <h3 className="terms-rights__h3"> Арендатор ___________</h3>
                </div>
            </div>
            
        </div>
      </div>

      <div className="terms-rights__footer">
        <ARFooter />
      </div>

    </div>
  );
};

export default TermsRights;