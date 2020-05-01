// WARNING: this file is auto generated, any changes will be lost
import { createDesignComponent, CanvasStore } from "framer"
const canvas = CanvasStore.shared(); // CANVAS_DATA;

export const colors = Object.freeze({
    /** #000000 */
    "primary": "var(--token-a17d8d46-4daf-46ff-ab88-685587f1c257, rgb(0, 0, 0))",
    /** #F6F6F6 */
    "primary50": "var(--token-d4af2058-b251-4b49-9195-e097c5f51353, rgb(246, 246, 246))",
    /** #EEEEEE */
    "primary100": "var(--token-758e5908-1016-4a40-bffa-7d389d572049, rgb(238, 238, 238))",
    /** #E2E2E2 */
    "primary200": "var(--token-65d9324f-fddf-4bab-a781-fd5783c66989, rgb(226, 226, 226))",
    /** #CBCBCB */
    "primary300": "var(--token-d9106765-64f0-493c-8cba-c8519e0bc8df, rgb(203, 203, 203))",
    /** #AFAFAF */
    "primary400": "var(--token-01bd488d-a1fb-49da-95b6-0629943df562, rgb(175, 175, 175))",
    /** #757575 */
    "primary500": "var(--token-7bd89c61-8fa5-4055-a29b-7f68482ecc39, rgb(117, 117, 117))",
    /** #545454 */
    "primary600": "var(--token-76a09f1b-2353-4412-8968-9caaaf0ccb69, rgb(84, 84, 84))",
    /** #333333 */
    "primary700": "var(--token-8c30b9c3-2cc2-49d8-bc66-3894b62666de, rgb(51, 51, 51))",
    /** #276EF1 */
    "accent": "var(--token-23ac0d8a-bc83-4330-b8ac-b67c50fd865c, rgb(39, 110, 241))",
    /** #EEF3FE */
    "accent50": "var(--token-8b7eb0f4-e85c-435a-9b82-00b519bb1dad, rgb(238, 243, 254))",
    /** #D4E2FC */
    "accent100": "var(--token-8d410d12-dd3c-4651-b54a-d2e2f34d4de0, rgb(212, 226, 252))",
    /** #A0BFF9 */
    "accent200": "var(--token-8926c302-078a-4772-8e3b-c3fd83a94589, rgb(160, 191, 249))",
    /** #5B91F4 */
    "accent300": "var(--token-dbd42322-bac0-41a5-9fec-44acb6202f88, rgb(91, 145, 244))",
    /** #276EF1 */
    "accent400": "var(--token-db4a1ebf-bb44-4a53-9efd-5a8776e588f7, rgb(39, 110, 241))",
    /** #1E54B7 */
    "accent500": "var(--token-71f3a321-6105-45e9-b31e-c26cc3a31b98, rgb(30, 84, 183))",
    /** #174291 */
    "accent600": "var(--token-b6825295-a9ce-487b-9e40-58d18c406524, rgb(23, 66, 145))",
    /** #102C60 */
    "accent700": "var(--token-bf171efa-73c8-40b4-b806-caf7bec3dca0, rgb(16, 44, 96))",
    /** #D44333 */
    "negative": "var(--token-59ba6f58-7242-4e95-8353-d2013432732a, rgb(212, 67, 51))",
    /** #FDF0EF */
    "negative50": "var(--token-8a90c147-15d6-435a-964d-334a4fe90248, rgb(253, 240, 239))",
    /** #FADBD7 */
    "negative100": "var(--token-f865a1c5-6d37-46f2-bf67-7227f93c1216, rgb(250, 219, 215))",
    /** #F4AFA7 */
    "negative200": "var(--token-ac227446-bb6f-4ceb-a427-2c36c1fe485c, rgb(244, 175, 167))",
    /** #EB7567 */
    "negative300": "var(--token-94abdb2c-43e5-4066-b33c-cc2ebb78508b, rgb(235, 117, 103))",
    /** #D44333 */
    "negative400": "var(--token-6b21390c-9113-44c0-ac69-45c3a1753d48, rgb(212, 67, 51))",
    /** #AE372A */
    "negative500": "var(--token-bd3b3969-879d-480c-a191-dbc8766746ff, rgb(174, 55, 42))",
    /** #892C21 */
    "negative600": "var(--token-563c2759-803a-47df-abad-12af99f4779a, rgb(137, 44, 33))",
    /** #5C1D16 */
    "negative700": "var(--token-c0d53eba-f14c-4771-baa2-bafe4ddb67bc, rgb(92, 29, 22))",
    /** #ED6E33 */
    "warning": "var(--token-3957c1b7-cb0b-4b6c-b41c-5ece44037ad3, rgb(237, 110, 51))",
    /** #FEF3EF */
    "warning50": "var(--token-0b0997f2-1fd5-477c-b951-67670ebf0cf8, rgb(254, 243, 239))",
    /** #FBE2D6 */
    "warning100": "var(--token-36adf603-871f-4e05-8b75-acdec22431cf, rgb(251, 226, 214))",
    /** #F7BFA5 */
    "warning200": "var(--token-382e1d49-ec16-4553-a46e-5be27f5ec9d7, rgb(247, 191, 165))",
    /** #F19164 */
    "warning300": "var(--token-bdc02b9b-b405-4ce0-a69e-589112c01459, rgb(241, 145, 100))",
    /** #ED6E33 */
    "warning400": "var(--token-08e66628-a2f1-412d-a714-f18602b5566c, rgb(237, 110, 51))",
    /** #B45427 */
    "warning500": "var(--token-ab1e99a2-c5fc-4161-96db-e1141402440e, rgb(180, 84, 39))",
    /** #8E421F */
    "warning600": "var(--token-1716d1bb-770f-4cbd-8b3c-5f99d7d6133e, rgb(142, 66, 31))",
    /** #5F2C14 */
    "warning700": "var(--token-ec6e9a2b-536d-45a5-8c1c-4ff24a7f72e5, rgb(95, 44, 20))",
    /** #3AA76D */
    "positive": "var(--token-b89ae129-cbe5-493a-94f3-984ee936bf11, rgb(58, 167, 109))",
    /** #F0F9F4 */
    "positive50": "var(--token-5b2d0a2e-1797-4bf4-93ec-6d2289b39b64, rgb(240, 249, 244))",
    /** #DAF0E3 */
    "positive100": "var(--token-fc7fdabc-b1f1-41c8-b0be-a8b445241e3c, rgb(218, 240, 227))",
    /** #AEDDC2 */
    "positive200": "var(--token-b77bd7e7-21ba-44ea-955a-3fc68d514eb5, rgb(174, 221, 194))",
    /** #73C496 */
    "positive300": "var(--token-1055094d-3577-4687-9fbd-5244a4615769, rgb(115, 196, 150))",
    /** #3AA76D */
    "positive400": "var(--token-4a0fbf6a-4564-45af-b973-e48a67fd6b14, rgb(58, 167, 109))",
    /** #368759 */
    "positive500": "var(--token-6feea38e-9d69-4f30-902f-73a53e430ee1, rgb(54, 135, 89))",
    /** #2B6B46 */
    "positive600": "var(--token-93e06c65-dd72-48da-a0e7-85addeeeec42, rgb(43, 107, 70))",
    /** #1C472F */
    "positive700": "var(--token-5869f027-0604-4724-b729-b05b2f8dec54, rgb(28, 71, 47))",
    /** #FFFFFF */
    "white": "var(--token-f06d0a0c-16c9-4395-9155-ed13fccd1e50, rgb(255, 255, 255))",
    /** #FFFFFF */
    "mono100": "var(--token-9430cef1-01a5-403f-9fcd-ab9507b18ad7, rgb(255, 255, 255))",
    /** #F6F6F6 */
    "mono200": "var(--token-f785c9fd-5ff6-448a-8b06-8c660014d860, rgb(246, 246, 246))",
    /** #EEEEEE */
    "mono300": "var(--token-3f892a7e-92f4-4b1e-a28b-904b488e52eb, rgb(238, 238, 238))",
    /** #E2E2E2 */
    "mono400": "var(--token-846f535d-7ac4-4c29-8b1f-f788614e9c3f, rgb(226, 226, 226))",
    /** #CBCBCB */
    "mono500": "var(--token-7980a9d2-bb3d-4fae-b795-bc342532d831, rgb(203, 203, 203))",
    /** #AFAFAF */
    "mono600": "var(--token-aeea609f-3086-42f4-933a-4b6959600f06, rgb(175, 175, 175))",
    /** #757575 */
    "mono700": "var(--token-8f27ac61-8cb9-4024-b913-415d58e7f697, rgb(117, 117, 117))",
    /** #545454 */
    "mono800": "var(--token-b7bd4b21-49eb-4556-b6e9-7ac75d7b84f0, rgb(84, 84, 84))",
    /** #333333 */
    "mono900": "var(--token-471f91b0-9bf8-4aa1-b597-3ade3cffaa43, rgb(51, 51, 51))",
    /** #000000 */
    "mono1000": "var(--token-1fb4581b-918c-457d-93cb-b5ee33e4caaf, rgb(0, 0, 0))",
    /** #000000 */
    "black": "var(--token-964967d1-df6a-49fc-ae04-3138b3050d15, rgb(0, 0, 0))",
    /** #FFE3AC */
    "rating200": "var(--token-7447e431-9216-4b64-b881-39b5e97cc01f, rgb(255, 227, 172))",
    /** #FFC043 */
    "rating400": "var(--token-9529e427-cf22-403c-97b9-dec5b9b0e909, rgb(255, 192, 67))",
    /** #000000 */
    "colorPrimary": "var(--token-304d1c8c-7dce-4655-9cdf-4e245d40d94b, rgb(0, 0, 0))",
    /** #545454 */
    "colorSecondary": "var(--token-9e0e0ee1-b1c1-4e00-bd0f-d757fa597a53, rgb(84, 84, 84))",
    /** #FFFFFF */
    "background": "var(--token-34dc68f2-b930-45b0-a5d6-9db52c1ad0be, rgb(255, 255, 255))",
    /** #FFFFFF */
    "backgroundAlt": "var(--token-cc5cb444-f967-4e59-9dd0-c0370f52af71, rgb(255, 255, 255))",
    /** #000000 */
    "backgroundInv": "var(--token-07650235-946f-42ac-8f97-9502ff41c4b5, rgb(0, 0, 0))",
    /** #000000 */
    "foreground": "var(--token-cc27cf75-5e54-4a37-9468-acdfcb8eea31, rgb(0, 0, 0))",
    /** #545454 */
    "foregroundAlt": "var(--token-be914fb4-66b0-49ba-b3c5-49c84f34e979, rgb(84, 84, 84))",
    /** #FFFFFF */
    "foregroundInv": "var(--token-7312df25-c604-4eb2-9493-08a1abc319aa, rgb(255, 255, 255))",
    /** #CBCBCB */
    "border": "var(--token-373da3a5-7fda-42ff-9d25-3930eb1256a5, rgb(203, 203, 203))",
    /** #AFAFAF */
    "borderAlt": "var(--token-f68b8bfe-591b-4027-a792-5155c0e6ed5d, rgb(175, 175, 175))",
    /** #000000 */
    "borderFocus": "var(--token-281c9e5b-cca8-4abf-bc46-4647899d9a55, rgb(0, 0, 0))",
    /** #D44333 */
    "borderError": "var(--token-bf8d4337-45a6-4800-b1d3-0d2708b867a4, rgb(212, 67, 51))",
    /** #000000 */
    "buttonPrimaryFill": "var(--token-1f331b96-5e80-4565-a79a-5b92ed8ce86e, rgb(0, 0, 0))",
    /** #FFFFFF */
    "buttonPrimaryText": "var(--token-0ea34f28-6afa-472e-9fd9-e0ccb04d6547, rgb(255, 255, 255))",
    /** #333333 */
    "buttonPrimaryHover": "var(--token-56514e65-469c-42ac-af2a-1ef904831f7f, rgb(51, 51, 51))",
    /** #545454 */
    "buttonPrimaryActive": "var(--token-bd0cf160-e4d9-4e6c-b0df-174514551d9d, rgb(84, 84, 84))",
    /** #545454 */
    "buttonPrimarySelectedFill": "var(--token-cef37f10-d851-4114-9289-13a2457cc7a6, rgb(84, 84, 84))",
    /** #FFFFFF */
    "buttonPrimarySelectedText": "var(--token-48183504-cab6-4388-9d9c-a6117b728ff6, rgb(255, 255, 255))",
    /** #F6F6F6 */
    "buttonPrimarySpinnerForeground": "var(--token-39b1bc51-492c-4498-bd9e-73cce62b414c, rgb(246, 246, 246))",
    /** #757575 */
    "buttonPrimarySpinnerBackground": "var(--token-c3e77313-19e6-4608-a5ea-23f9c5d6fe6c, rgb(117, 117, 117))",
    /** #EEEEEE */
    "buttonSecondaryFill": "var(--token-5aab5f5d-2105-4e7a-985e-00e9e0c4b065, rgb(238, 238, 238))",
    /** #000000 */
    "buttonSecondaryText": "var(--token-a61c36b8-ec0e-48c1-98d5-b197d0435e03, rgb(0, 0, 0))",
    /** #E2E2E2 */
    "buttonSecondaryHover": "var(--token-5a5b6e01-960d-4a2a-8c81-4ce8ba63252e, rgb(226, 226, 226))",
    /** #CBCBCB */
    "buttonSecondaryActive": "var(--token-83aa0ec9-ff58-4de8-bee9-895833b6b1b7, rgb(203, 203, 203))",
    /** #E2E2E2 */
    "buttonSecondarySelectedFill": "var(--token-bd501c1a-53d9-42e2-9707-ff1ee4a997e7, rgb(226, 226, 226))",
    /** #000000 */
    "buttonSecondarySelectedText": "var(--token-2038a129-c972-4a6f-ad6e-73e28677c724, rgb(0, 0, 0))",
    /** #333333 */
    "buttonSecondarySpinnerForeground": "var(--token-d9d134b4-7110-4a71-b8d7-ede536f19d9c, rgb(51, 51, 51))",
    /** #CBCBCB */
    "buttonSecondarySpinnerBackground": "var(--token-1c814448-47fd-451f-bba6-6b38b6cbea7e, rgb(203, 203, 203))",
    /** rgba(0, 0, 0, 0) */
    "buttonTertiaryFill": "var(--token-16316d10-1c03-42a4-8a46-3b1f557cb5f5, rgba(0, 0, 0, 0))",
    /** #000000 */
    "buttonTertiaryText": "var(--token-36f2f857-817a-476b-9dbd-485028013fa2, rgb(0, 0, 0))",
    /** #F6F6F6 */
    "buttonTertiaryHover": "var(--token-567b4cf2-e333-47cb-9af7-0acc4ed56037, rgb(246, 246, 246))",
    /** #EEEEEE */
    "buttonTertiaryActive": "var(--token-29d09196-85a3-48cd-972f-1c200d94e094, rgb(238, 238, 238))",
    /** #EEEEEE */
    "buttonTertiarySelectedFill": "var(--token-d9bb8ee9-38b1-4c45-9c66-b8bd3b694fba, rgb(238, 238, 238))",
    /** #000000 */
    "buttonTertiarySelectedText": "var(--token-676f9d61-6f6f-4b0b-8cd0-e49c34445d66, rgb(0, 0, 0))",
    /** #333333 */
    "buttonTertiarySpinnerForeground": "var(--token-91d7261e-b401-4e94-ab6a-63c4918ce7cc, rgb(51, 51, 51))",
    /** #CBCBCB */
    "buttonTertiarySpinnerBackground": "var(--token-612ef0ca-1364-4484-8af9-015739b70de7, rgb(203, 203, 203))",
    /** rgba(0, 0, 0, 0) */
    "buttonMinimalFill": "var(--token-30572654-e33b-4ddb-99d3-f1369ecf770f, rgba(0, 0, 0, 0))",
    /** #000000 */
    "buttonMinimalText": "var(--token-409dbfae-9bda-4c42-8bfc-6dd1c9106231, rgb(0, 0, 0))",
    /** #F6F6F6 */
    "buttonMinimalHover": "var(--token-e2faed96-240d-42cb-8130-c25498e89f25, rgb(246, 246, 246))",
    /** #EEEEEE */
    "buttonMinimalActive": "var(--token-409b58a5-d84b-45cb-b60f-ea0ac435fda2, rgb(238, 238, 238))",
    /** #EEEEEE */
    "buttonMinimalSelectedFill": "var(--token-7e88fc95-9429-4341-ad43-85a9ce378bba, rgb(238, 238, 238))",
    /** #000000 */
    "buttonMinimalSelectedText": "var(--token-44541b8b-fbd1-4b03-adbf-5391fc00c904, rgb(0, 0, 0))",
    /** #333333 */
    "buttonMinimalSpinnerForeground": "var(--token-20be40f0-1250-461f-aff5-5b6923c8029d, rgb(51, 51, 51))",
    /** #CBCBCB */
    "buttonMinimalSpinnerBackground": "var(--token-193862e5-ccfe-4582-9804-f6546de9b29c, rgb(203, 203, 203))",
    /** #F6F6F6 */
    "buttonDisabledFill": "var(--token-913589a2-b716-4660-a4b4-a2a2af23bb50, rgb(246, 246, 246))",
    /** #AFAFAF */
    "buttonDisabledText": "var(--token-c872665b-937e-4015-900e-1572fbfc81bd, rgb(175, 175, 175))",
    /** #AFAFAF */
    "buttonDisabledSpinnerForeground": "var(--token-6c968094-0a8f-4e02-b15f-1d76abcbc14b, rgb(175, 175, 175))",
    /** #E2E2E2 */
    "buttonDisabledSpinnerBackground": "var(--token-fcf07095-6175-4e64-a862-9b2217119341, rgb(226, 226, 226))",
    /** #333333 */
    "breadcrumbsText": "var(--token-f1f0e532-f318-4c1f-830a-d64aca72b857, rgb(51, 51, 51))",
    /** #757575 */
    "breadcrumbsSeparatorFill": "var(--token-dad40c05-eb55-436e-bd44-235bdba0a1ce, rgb(117, 117, 117))",
    /** #FFFFFF */
    "datepickerBackground": "var(--token-25fc7873-8a4f-4798-854a-6349606258d9, rgb(255, 255, 255))",
    /** #000000 */
    "datepickerDayFont": "var(--token-dc400ec9-9bb6-4774-a9db-1c714b38d887, rgb(0, 0, 0))",
    /** #CBCBCB */
    "datepickerDayFontDisabled": "var(--token-b049b90a-8209-4437-aa31-30f6faa626d0, rgb(203, 203, 203))",
    /** #EEEEEE */
    "datepickerDayPseudoSelected": "var(--token-a71bc8b6-f714-482f-aebe-90054ea12ae9, rgb(238, 238, 238))",
    /** #E2E2E2 */
    "datepickerDayPseudoHighlighted": "var(--token-0409f1ec-3a2b-4af8-ba1e-505b7b581f25, rgb(226, 226, 226))",
    /** #FFFFFF */
    "calendarBackground": "var(--token-3c17248f-90c7-4dc2-92d3-249f350358ad, rgb(255, 255, 255))",
    /** #000000 */
    "calendarForeground": "var(--token-336015fa-7477-4730-b4b1-e2e2c8267730, rgb(0, 0, 0))",
    /** #CBCBCB */
    "calendarForegroundDisabled": "var(--token-eea1b858-4213-4271-b7c9-6f3c95d2da35, rgb(203, 203, 203))",
    /** #000000 */
    "calendarHeaderBackground": "var(--token-a4e9bdfc-838c-4b8a-8f54-4cdb4e2cce62, rgb(0, 0, 0))",
    /** #FFFFFF */
    "calendarHeaderForeground": "var(--token-98dfc486-ad4f-435a-8c29-56b491f4a83a, rgb(255, 255, 255))",
    /** #333333 */
    "calendarHeaderBackgroundActive": "var(--token-5d7f68db-91c6-4123-8de9-b8b56ee740ae, rgb(51, 51, 51))",
    /** #757575 */
    "calendarHeaderForegroundDisabled": "var(--token-bc52ff5c-2324-4b7e-9443-da8c944aa556, rgb(117, 117, 117))",
    /** #EEEEEE */
    "calendarDayBackgroundPseudoSelected": "var(--token-570e390a-bde9-4143-8161-92a8b2d2acf5, rgb(238, 238, 238))",
    /** #000000 */
    "calendarDayForegroundPseudoSelected": "var(--token-a6756eb4-4530-42c4-85db-455714249124, rgb(0, 0, 0))",
    /** #E2E2E2 */
    "calendarDayBackgroundPseudoSelectedHighlighted": "var(--token-e6179dfd-8b60-433d-a2b2-79b518a5d7ae, rgb(226, 226, 226))",
    /** #000000 */
    "calendarDayForegroundPseudoSelectedHighlighted": "var(--token-11ed2c18-a3fc-41ea-b780-e9c0c93ab895, rgb(0, 0, 0))",
    /** #FFFFFF */
    "calendarDayBackgroundSelected": "var(--token-bb78a448-7d17-4b50-a3c3-5490c9aad727, rgb(255, 255, 255))",
    /** #000000 */
    "calendarDayForegroundSelected": "var(--token-dd117578-59a4-4af3-945c-f3783cf06d6f, rgb(0, 0, 0))",
    /** #000000 */
    "calendarDayBackgroundSelectedHighlighted": "var(--token-9a804cbd-9d27-4576-9091-5f079b9ba5c1, rgb(0, 0, 0))",
    /** #FFFFFF */
    "calendarDayForegroundSelectedHighlighted": "var(--token-a1563c9c-6030-4511-9254-dfeededf52ef, rgb(255, 255, 255))",
    /** #F6F6F6 */
    "fileUploaderBackgroundColor": "var(--token-bb916362-51f9-4912-a311-4b88fe683b33, rgb(246, 246, 246))",
    /** #F6F6F6 */
    "fileUploaderBackgroundColorActive": "var(--token-0f0a9ba8-616b-4e21-b850-6d936ecc6781, rgb(246, 246, 246))",
    /** #000000 */
    "fileUploaderBorderColorActive": "var(--token-cb35f87e-1105-4422-a5f5-3e85772b85f0, rgb(0, 0, 0))",
    /** #CBCBCB */
    "fileUploaderBorderColorDefault": "var(--token-756b053a-201f-4a99-ae9f-29667a3e1a8c, rgb(203, 203, 203))",
    /** #AFAFAF */
    "fileUploaderMessageColor": "var(--token-1b7cbb97-e799-4892-8786-24eb166d2376, rgb(175, 175, 175))",
    /** #000000 */
    "linkText": "var(--token-db896fc7-2c4b-4bbb-b8c8-80e39595095a, rgb(0, 0, 0))",
    /** #333333 */
    "linkVisited": "var(--token-07eb5243-8e5e-4751-b9ba-441b4c6cdd6c, rgb(51, 51, 51))",
    /** #545454 */
    "linkHover": "var(--token-95444f5f-adb1-4625-a204-4da5f559aec4, rgb(84, 84, 84))",
    /** #757575 */
    "linkActive": "var(--token-ce3b7acc-e128-47dd-a4f7-dad7f8306071, rgb(117, 117, 117))",
    /** rgba(39, 110, 241, 0.32) */
    "shadowFocus": "var(--token-18234610-abc2-4641-a801-e8b1343891cd, rgba(39, 110, 241, 0.32))",
    /** rgba(229, 73, 55, 0.32) */
    "shadowError": "var(--token-f532083d-ecb1-4d64-86b7-437d63a1585b, rgba(229, 73, 55, 0.32))",
    /** #FFFFFF */
    "listHeaderFill": "var(--token-5674972d-cd2c-456d-b72d-96928011931f, rgb(255, 255, 255))",
    /** #F6F6F6 */
    "listBodyFill": "var(--token-8a42f4ef-5c9e-49ea-98bc-bff199e711ff, rgb(246, 246, 246))",
    /** #CBCBCB */
    "listIconFill": "var(--token-2dd8aaf2-1a79-4924-b7dd-ebc2dfdc17ec, rgb(203, 203, 203))",
    /** #CBCBCB */
    "listBorder": "var(--token-dd03b029-da6e-4269-8ae2-1d51f0817383, rgb(203, 203, 203))",
    /** #FFFFFF */
    "progressStepsCompletedText": "var(--token-8895d51c-fac1-4496-a8a9-4b23a26a6820, rgb(255, 255, 255))",
    /** #000000 */
    "progressStepsCompletedFill": "var(--token-d8bd48f5-7353-46de-b145-3e0ff054d8e5, rgb(0, 0, 0))",
    /** #FFFFFF */
    "progressStepsActiveText": "var(--token-376f00d3-a6f3-4320-ba70-32d63af11316, rgb(255, 255, 255))",
    /** #000000 */
    "progressStepsActiveFill": "var(--token-9273685f-149f-491c-bb4c-7af34f733f0d, rgb(0, 0, 0))",
    /** #000000 */
    "progressStepsIconActiveFill": "var(--token-35ee9952-82ec-43f0-95ff-b924b09ac55a, rgb(0, 0, 0))",
    /** #FFFFFF */
    "tickFill": "var(--token-06e2c7ed-b42f-4fb6-b214-ab8c4c0a9003, rgb(255, 255, 255))",
    /** #F6F6F6 */
    "tickFillHover": "var(--token-4a736856-8809-418f-bf03-9aaa2bafa4c3, rgb(246, 246, 246))",
    /** #EEEEEE */
    "tickFillActive": "var(--token-761896b1-1109-4f9f-ab2b-3586181f650e, rgb(238, 238, 238))",
    /** #000000 */
    "tickFillSelected": "var(--token-7209120c-2ce2-421f-ac03-30118aa99a36, rgb(0, 0, 0))",
    /** #333333 */
    "tickFillSelectedHover": "var(--token-ce4fadd8-a4dd-4333-b2aa-83cf9ebbb1e5, rgb(51, 51, 51))",
    /** #545454 */
    "tickFillSelectedHoverActive": "var(--token-845141cb-0267-4db1-b741-9c8123c3ab41, rgb(84, 84, 84))",
    /** #FDF0EF */
    "tickFillError": "var(--token-cff139c2-fa3b-42e0-ab14-7ebc38ecfe84, rgb(253, 240, 239))",
    /** #FADBD7 */
    "tickFillErrorHover": "var(--token-84dcc4c8-e685-4819-98bb-d9399c834fc8, rgb(250, 219, 215))",
    /** #F4AFA7 */
    "tickFillErrorHoverActive": "var(--token-3574ab46-963b-4205-a732-adeb249ed493, rgb(244, 175, 167))",
    /** #D44333 */
    "tickFillErrorSelected": "var(--token-a32c4f89-bfbc-46f7-8f1f-76bdcf6e3e2a, rgb(212, 67, 51))",
    /** #AE372A */
    "tickFillErrorSelectedHover": "var(--token-33614e3d-5519-4301-b6bc-8ce17e7c9987, rgb(174, 55, 42))",
    /** #892C21 */
    "tickFillErrorSelectedHoverActive": "var(--token-4e1fc49e-1cdc-45ba-a86b-8df3d4c9d34e, rgb(137, 44, 33))",
    /** #EEEEEE */
    "tickFillDisabled": "var(--token-33d63fdb-1ee7-4ead-a026-0837c2e50ef7, rgb(238, 238, 238))",
    /** #757575 */
    "tickBorder": "var(--token-c59ea2fe-8c33-485e-ac1d-8fea76e07689, rgb(117, 117, 117))",
    /** #D44333 */
    "tickBorderError": "var(--token-5368ecb7-bad7-4364-b248-c4270a36be9f, rgb(212, 67, 51))",
    /** #FFFFFF */
    "tickMarkFill": "var(--token-31b25057-74a9-4b42-b77d-b9f3bf477eeb, rgb(255, 255, 255))",
    /** #FFFFFF */
    "tickMarkFillError": "var(--token-eb860cc0-3f64-4d35-a6cf-1d8f912e252f, rgb(255, 255, 255))",
    /** #AFAFAF */
    "tickMarkFillDisabled": "var(--token-c6784efc-82ae-40f5-bf03-d373f51b9497, rgb(175, 175, 175))",
    /** #E2E2E2 */
    "sliderTrackFill": "var(--token-d0d67f19-e24f-44fa-84e4-bc8cc7c7636a, rgb(226, 226, 226))",
    /** #CBCBCB */
    "sliderTrackFillHover": "var(--token-fd7560e3-1ef1-4fb8-a9ce-0235b3f9d10b, rgb(203, 203, 203))",
    /** #AFAFAF */
    "sliderTrackFillActive": "var(--token-1dd041c4-b5cb-49b4-b6cb-6887b6076b0a, rgb(175, 175, 175))",
    /** #000000 */
    "sliderTrackFillSelected": "var(--token-2f3a7bf0-bce1-4ea8-be24-9c0b6e88b276, rgb(0, 0, 0))",
    /** #000000 */
    "sliderTrackFillSelectedHover": "var(--token-590dbc28-66c4-4063-8fc1-13cf540bb9d9, rgb(0, 0, 0))",
    /** #757575 */
    "sliderTrackFillSelectedActive": "var(--token-535838b1-bb8a-4184-8757-7526127c6e27, rgb(117, 117, 117))",
    /** #EEEEEE */
    "sliderTrackFillDisabled": "var(--token-fb21cefe-6c33-4fd7-9679-b565bd9c0175, rgb(238, 238, 238))",
    /** #FFFFFF */
    "sliderHandleFill": "var(--token-1caf0495-b3c6-478a-8186-2abf9a03aad2, rgb(255, 255, 255))",
    /** #FFFFFF */
    "sliderHandleFillHover": "var(--token-350ba187-f4b9-49f6-8727-0202a6d86c66, rgb(255, 255, 255))",
    /** #FFFFFF */
    "sliderHandleFillActive": "var(--token-148c0165-79af-4f35-8274-b5d3f878984a, rgb(255, 255, 255))",
    /** #FFFFFF */
    "sliderHandleFillSelected": "var(--token-1581694f-7405-4a02-ba07-c0a4c6cd1eba, rgb(255, 255, 255))",
    /** #FFFFFF */
    "sliderHandleFillSelectedHover": "var(--token-9673c1ba-f90b-4452-a93d-8a481b2655c5, rgb(255, 255, 255))",
    /** #FFFFFF */
    "sliderHandleFillSelectedActive": "var(--token-97de56a1-b641-4683-beba-a8a13234b572, rgb(255, 255, 255))",
    /** #CBCBCB */
    "sliderHandleFillDisabled": "var(--token-b1989376-2bbc-474e-9744-cc1ce6dcec8f, rgb(203, 203, 203))",
    /** #E2E2E2 */
    "sliderHandleInnerFill": "var(--token-6e208b47-3197-4096-b2c7-2ee2b0f4ab0c, rgb(226, 226, 226))",
    /** #E2E2E2 */
    "sliderHandleInnerFillDisabled": "var(--token-38316c89-14bb-406c-8464-20cef2c9a708, rgb(226, 226, 226))",
    /** #000000 */
    "sliderHandleInnerFillSelectedHover": "var(--token-f47801cb-b71e-473f-a952-6cc35160dfeb, rgb(0, 0, 0))",
    /** #757575 */
    "sliderHandleInnerFillSelectedActive": "var(--token-43be97f6-d390-40e3-9ace-03ba56c465f9, rgb(117, 117, 117))",
    /** #CBCBCB */
    "sliderBorder": "var(--token-954207a9-a2bb-4b46-94ec-3ca18b01529c, rgb(203, 203, 203))",
    /** #000000 */
    "sliderBorderHover": "var(--token-97fe22fb-9def-4516-85d8-482243a2348c, rgb(0, 0, 0))",
    /** #AFAFAF */
    "sliderBorderDisabled": "var(--token-b49bdf20-340a-41fa-884c-c35e28158a4d, rgb(175, 175, 175))",
    /** #EEEEEE */
    "inputFill": "var(--token-a066fc51-2239-40f3-a695-35fdecb3ecc9, rgb(238, 238, 238))",
    /** #FDF0EF */
    "inputFillError": "var(--token-994a412e-66ab-4201-b02e-6b9bec0dda6c, rgb(253, 240, 239))",
    /** #F6F6F6 */
    "inputFillDisabled": "var(--token-48020cc2-d285-4daa-bb4e-dd41c5826fd6, rgb(246, 246, 246))",
    /** #F6F6F6 */
    "inputFillActive": "var(--token-643b6ed6-95bc-4c5e-a3b7-1a3118ba4296, rgb(246, 246, 246))",
    /** #F0F9F4 */
    "inputFillPositive": "var(--token-f941e1a0-5496-4a1a-b477-83474a1fc6dc, rgb(240, 249, 244))",
    /** #AFAFAF */
    "inputTextDisabled": "var(--token-2f9c5464-7874-4c8e-94ba-d611dfdc3202, rgb(175, 175, 175))",
    /** #F4AFA7 */
    "inputBorderError": "var(--token-864461d2-9d53-4b64-a470-c33988266dca, rgb(244, 175, 167))",
    /** #AEDDC2 */
    "inputBorderPositive": "var(--token-300a872d-49a8-493f-8012-6cca44785aef, rgb(174, 221, 194))",
    /** #EEEEEE */
    "inputEnhancerFill": "var(--token-594f64d0-b5da-4876-991c-23d4c94541bc, rgb(238, 238, 238))",
    /** #EEEEEE */
    "inputEnhancerFillDisabled": "var(--token-30bdbfff-dee1-4893-bac5-0be6e5f08c47, rgb(238, 238, 238))",
    /** #AFAFAF */
    "inputEnhancerTextDisabled": "var(--token-456d4375-7552-43a7-b3fc-fdbb1a357d40, rgb(175, 175, 175))",
    /** #FFFFFF */
    "menuFill": "var(--token-30acfbd3-cac4-452d-8cb3-b2e1d11be609, rgb(255, 255, 255))",
    /** #F6F6F6 */
    "menuFillHover": "var(--token-95d3f1c0-7496-4b34-8a8d-5b1703b52bb7, rgb(246, 246, 246))",
    /** #545454 */
    "menuFontDefault": "var(--token-0de07542-6460-44f9-96e2-1d0e5060b966, rgb(84, 84, 84))",
    /** #CBCBCB */
    "menuFontDisabled": "var(--token-f2a65e10-1ccd-4818-8f88-1f2054a7fbd3, rgb(203, 203, 203))",
    /** #000000 */
    "menuFontHighlighted": "var(--token-3c05a5b2-a499-4b2f-a09c-ae3549078349, rgb(0, 0, 0))",
    /** #000000 */
    "menuFontSelected": "var(--token-db136af7-809b-402d-8d00-f4fad1c28ba1, rgb(0, 0, 0))",
    /** #000000 */
    "modalCloseColor": "var(--token-3e06a4d3-eff7-4323-85cd-a4e7091a5582, rgb(0, 0, 0))",
    /** #545454 */
    "modalCloseColorHover": "var(--token-739b3d34-cb73-466d-8aa2-8abfc417f728, rgb(84, 84, 84))",
    /** #545454 */
    "modalCloseColorFocus": "var(--token-a7f71be2-e8ac-48b6-acb6-bb07084bc3f7, rgb(84, 84, 84))",
    /** #545454 */
    "paginationTriangleDown": "var(--token-52ce502c-52e2-488f-a361-d71d18582f04, rgb(84, 84, 84))",
    /** rgba(0, 0, 0, 0) */
    "headerNavigationFill": "var(--token-3fe9eb0c-de38-4b93-b611-add9822e96a4, rgba(0, 0, 0, 0))",
    /** #F6F6F6 */
    "tabBarFill": "var(--token-f2e170ac-b7b6-4daa-9cec-dde8269039f3, rgb(246, 246, 246))",
    /** #545454 */
    "tabColor": "var(--token-5a8703b2-4214-421b-9d7d-f3eb3bfd70e7, rgb(84, 84, 84))",
    /** #F6F6F6 */
    "notificationPrimaryBackground": "var(--token-ba33d6d0-21db-4804-b73e-df649fe8a2d8, rgb(246, 246, 246))",
    /** #757575 */
    "notificationPrimaryText": "var(--token-d3f8c278-f4dc-4837-936f-49258611ef6f, rgb(117, 117, 117))",
    /** #EEF3FE */
    "notificationInfoBackground": "var(--token-69c88a79-ba2f-405f-a914-26e9bc073e82, rgb(238, 243, 254))",
    /** #1E54B7 */
    "notificationInfoText": "var(--token-c8bf351f-56a7-4e3c-aee4-a97865951b62, rgb(30, 84, 183))",
    /** #F0F9F4 */
    "notificationPositiveBackground": "var(--token-ef35ccaf-58f0-40b4-8906-4d3b53325549, rgb(240, 249, 244))",
    /** #368759 */
    "notificationPositiveText": "var(--token-e0d845d1-da3a-4231-a71f-d35f8b76263e, rgb(54, 135, 89))",
    /** #FEF3EF */
    "notificationWarningBackground": "var(--token-5743c1b3-ff4c-4315-8bde-6e8c5d24b8b4, rgb(254, 243, 239))",
    /** #B45427 */
    "notificationWarningText": "var(--token-74d509c8-911c-4518-acfe-4fbe8b295814, rgb(180, 84, 39))",
    /** #FDF0EF */
    "notificationNegativeBackground": "var(--token-5a3feab0-12ac-4da3-b738-b04939a60bbf, rgb(253, 240, 239))",
    /** #AE372A */
    "notificationNegativeText": "var(--token-a9694d50-bda7-40be-8275-c196fb827531, rgb(174, 55, 42))",
    /** #333333 */
    "tagNeutralSolidBackground": "var(--token-3d7aadf8-e49b-4175-a4e0-3040062a739f, rgb(51, 51, 51))",
    /** #EEEEEE */
    "tagNeutralSolidHover": "var(--token-072cb139-1713-4fe8-9944-8964020279ad, rgb(238, 238, 238))",
    /** #E2E2E2 */
    "tagNeutralSolidActive": "var(--token-19c686a1-7217-4f36-8cac-dead3ae7d7b6, rgb(226, 226, 226))",
    /** #F6F6F6 */
    "tagNeutralSolidDisabled": "var(--token-82bda6e3-4e92-4e29-8194-363b9e2eb85c, rgb(246, 246, 246))",
    /** #FFFFFF */
    "tagNeutralSolidFont": "var(--token-ad16e0ef-05ec-45be-b80f-75a0b19b355b, rgb(255, 255, 255))",
    /** #333333 */
    "tagNeutralSolidFontHover": "var(--token-7bb14dc8-1ae7-449c-a1c0-97966626fa12, rgb(51, 51, 51))",
    /** #EEEEEE */
    "tagNeutralLightBackground": "var(--token-33ae1226-9441-492a-86ba-4fffa2c43edc, rgb(238, 238, 238))",
    /** #EEEEEE */
    "tagNeutralLightHover": "var(--token-a052c353-1a55-41ed-ad11-ed355578ce0d, rgb(238, 238, 238))",
    /** #E2E2E2 */
    "tagNeutralLightActive": "var(--token-cadea128-b5f0-4abd-bcec-5bcbcd8af080, rgb(226, 226, 226))",
    /** #F6F6F6 */
    "tagNeutralLightDisabled": "var(--token-b3d538e7-997a-4b6b-8438-2f3ce87c5e99, rgb(246, 246, 246))",
    /** #333333 */
    "tagNeutralLightFont": "var(--token-891b62a9-794f-4f99-af10-1969c2d7dbdb, rgb(51, 51, 51))",
    /** #333333 */
    "tagNeutralLightFontHover": "var(--token-85507fab-1a48-4ace-84cf-670f5abe5a1a, rgb(51, 51, 51))",
    /** #333333 */
    "tagNeutralOutlinedBackground": "var(--token-7c1eba5c-9f1e-4470-9e6d-117c4ceedd54, rgb(51, 51, 51))",
    /** #545454 */
    "tagNeutralOutlinedHover": "var(--token-022aed4a-793a-4ab0-9805-acc635a594fe, rgb(84, 84, 84))",
    /** #333333 */
    "tagNeutralOutlinedActive": "var(--token-9245589e-aa6e-4121-b9e0-a063d419244e, rgb(51, 51, 51))",
    /** #F6F6F6 */
    "tagNeutralOutlinedDisabled": "var(--token-e72b0837-2bea-48a9-a48d-8c55e5bfef05, rgb(246, 246, 246))",
    /** #333333 */
    "tagNeutralOutlinedFont": "var(--token-e65be215-039d-4012-a8ff-279d3a3ae763, rgb(51, 51, 51))",
    /** #F6F6F6 */
    "tagNeutralOutlinedFontHover": "var(--token-b1431964-acc3-475a-9e05-5fef2623c4fc, rgb(246, 246, 246))",
    /** #CBCBCB */
    "tagNeutralFontDisabled": "var(--token-15667caa-6081-49c8-b285-4f93f2d6f8ff, rgb(203, 203, 203))",
    /** #000000 */
    "tagPrimarySolidBackground": "var(--token-c90957f8-b2ba-4ea7-87f4-bb5933c5d3c3, rgb(0, 0, 0))",
    /** #EEEEEE */
    "tagPrimarySolidHover": "var(--token-5fcc340d-df73-4d20-bc90-18834cc7e05a, rgb(238, 238, 238))",
    /** #E2E2E2 */
    "tagPrimarySolidActive": "var(--token-380c4eea-74cd-4df3-a015-bbc32ad916ee, rgb(226, 226, 226))",
    /** #F6F6F6 */
    "tagPrimarySolidDisabled": "var(--token-71c1d2e0-527c-4948-8068-69764c2829d1, rgb(246, 246, 246))",
    /** #F6F6F6 */
    "tagPrimarySolidFont": "var(--token-6013fea9-d502-48ae-a075-e85e0968b810, rgb(246, 246, 246))",
    /** #333333 */
    "tagPrimarySolidFontHover": "var(--token-4b2d4975-da0d-4f7d-a038-bfec585d45a2, rgb(51, 51, 51))",
    /** #F6F6F6 */
    "tagPrimaryLightBackground": "var(--token-ea21381c-7e39-4998-a976-ae564d30d6a5, rgb(246, 246, 246))",
    /** #EEEEEE */
    "tagPrimaryLightHover": "var(--token-9da68117-dd4c-4ed9-8021-362b2f52ba39, rgb(238, 238, 238))",
    /** #EEEEEE */
    "tagPrimaryLightActive": "var(--token-d668eebd-8260-4cb4-8a42-e359e74d9bd8, rgb(238, 238, 238))",
    /** #F6F6F6 */
    "tagPrimaryLightDisabled": "var(--token-88989565-74dc-4e09-aeeb-a0513d02ad51, rgb(246, 246, 246))",
    /** #757575 */
    "tagPrimaryLightFont": "var(--token-4523e1af-9ed2-48db-8fbb-d0c893a07712, rgb(117, 117, 117))",
    /** #757575 */
    "tagPrimaryLightFontHover": "var(--token-31198748-9a64-41b7-aa00-25b6e3c276cc, rgb(117, 117, 117))",
    /** #000000 */
    "tagPrimaryOutlinedBackground": "var(--token-0c3bf4d1-2966-4bb0-be34-5433149ac21e, rgb(0, 0, 0))",
    /** #333333 */
    "tagPrimaryOutlinedHover": "var(--token-e3bb3b68-75eb-41c9-9cc7-13e779b0968a, rgb(51, 51, 51))",
    /** #545454 */
    "tagPrimaryOutlinedActive": "var(--token-e9d2646a-85fe-4102-afbb-42e74f3bb475, rgb(84, 84, 84))",
    /** #F6F6F6 */
    "tagPrimaryOutlinedDisabled": "var(--token-020a6fd7-de0c-4e6e-947e-8aceff28202a, rgb(246, 246, 246))",
    /** #000000 */
    "tagPrimaryOutlinedFont": "var(--token-12706d1e-1044-4e20-ab4f-c7ad3fac8a00, rgb(0, 0, 0))",
    /** #F6F6F6 */
    "tagPrimaryOutlinedFontHover": "var(--token-f7c07dbc-f2d4-47d7-a526-fa35540f4214, rgb(246, 246, 246))",
    /** #AFAFAF */
    "tagPrimaryFontDisabled": "var(--token-f053afe0-9df0-49a8-a51c-7579c88f482a, rgb(175, 175, 175))",
    /** #276EF1 */
    "tagAccentSolidBackground": "var(--token-634a47d3-711b-47d5-aab9-f19a19571ebf, rgb(39, 110, 241))",
    /** #EEF3FE */
    "tagAccentSolidHover": "var(--token-2b23440a-2ab6-4a8e-bf1c-cda5252ee813, rgb(238, 243, 254))",
    /** #D4E2FC */
    "tagAccentSolidActive": "var(--token-92dfe61b-5b9e-49ce-b199-8bc811e94a29, rgb(212, 226, 252))",
    /** #EEF3FE */
    "tagAccentSolidDisabled": "var(--token-89033a37-303c-458d-a1d3-bec777fa98fe, rgb(238, 243, 254))",
    /** #EEF3FE */
    "tagAccentSolidFont": "var(--token-15812d6d-96be-482b-a1d9-edb4d78374f9, rgb(238, 243, 254))",
    /** #1E54B7 */
    "tagAccentSolidFontHover": "var(--token-990d78ec-ca1f-4308-a840-ee9124f33018, rgb(30, 84, 183))",
    /** #EEF3FE */
    "tagAccentLightBackground": "var(--token-5f67bda5-e360-4b0f-a6b0-106a8513e2b2, rgb(238, 243, 254))",
    /** #D4E2FC */
    "tagAccentLightHover": "var(--token-a9f3dca3-dcf9-4f4a-96a1-f30bc655d1a0, rgb(212, 226, 252))",
    /** #D4E2FC */
    "tagAccentLightActive": "var(--token-c83aac24-f641-4969-97b4-d7d2dd019905, rgb(212, 226, 252))",
    /** #EEF3FE */
    "tagAccentLightDisabled": "var(--token-124e2d64-1cb0-414c-afc2-087000a501c2, rgb(238, 243, 254))",
    /** #1E54B7 */
    "tagAccentLightFont": "var(--token-b00a2871-6adf-4ca5-84c7-0fc79b891a84, rgb(30, 84, 183))",
    /** #1E54B7 */
    "tagAccentLightFontHover": "var(--token-c13785bc-038a-4709-aac7-54c0a4bf49a0, rgb(30, 84, 183))",
    /** #276EF1 */
    "tagAccentOutlinedBackground": "var(--token-d9d36f9a-bd91-4039-9607-5d495073486b, rgb(39, 110, 241))",
    /** #1E54B7 */
    "tagAccentOutlinedHover": "var(--token-4cb514fd-9389-442c-b712-116cc90c0480, rgb(30, 84, 183))",
    /** #174291 */
    "tagAccentOutlinedActive": "var(--token-d1cdfb52-7cfc-402f-80a8-3ae5e420a332, rgb(23, 66, 145))",
    /** #EEF3FE */
    "tagAccentOutlinedDisabled": "var(--token-75bbaa43-8be7-433c-920d-2272a5e4bbfc, rgb(238, 243, 254))",
    /** #1E54B7 */
    "tagAccentOutlinedFont": "var(--token-88a5bd98-7d82-4016-9fec-f3fc5e486e25, rgb(30, 84, 183))",
    /** #EEF3FE */
    "tagAccentOutlinedFontHover": "var(--token-2d769bdd-2080-4e2c-802e-1a8900608617, rgb(238, 243, 254))",
    /** #A0BFF9 */
    "tagAccentFontDisabled": "var(--token-a91d9411-5b8b-422d-96a0-7c3759b08f2d, rgb(160, 191, 249))",
    /** #3AA76D */
    "tagPositiveSolidBackground": "var(--token-dfd7f286-89ac-4815-b4bf-264c2565b65d, rgb(58, 167, 109))",
    /** #F0F9F4 */
    "tagPositiveSolidHover": "var(--token-1cc8ab23-6450-4c1d-8ce4-e252d6b385e0, rgb(240, 249, 244))",
    /** #DAF0E3 */
    "tagPositiveSolidActive": "var(--token-60e38ecb-686f-4e27-8f61-1a235d789dc1, rgb(218, 240, 227))",
    /** #F0F9F4 */
    "tagPositiveSolidDisabled": "var(--token-97d3fbee-7189-43f7-adf7-e33c98f66f2a, rgb(240, 249, 244))",
    /** #F0F9F4 */
    "tagPositiveSolidFont": "var(--token-fdeac8fa-91bb-4abe-b5d6-2dbd99438f1a, rgb(240, 249, 244))",
    /** #368759 */
    "tagPositiveSolidFontHover": "var(--token-8d56c7d2-5592-40ac-8d60-06e717c764cd, rgb(54, 135, 89))",
    /** #F0F9F4 */
    "tagPositiveLightBackground": "var(--token-e837ff1c-4137-47f5-91bc-6140472e7153, rgb(240, 249, 244))",
    /** #DAF0E3 */
    "tagPositiveLightHover": "var(--token-ec243b55-ffdb-4e3a-a51a-32073699af4c, rgb(218, 240, 227))",
    /** #DAF0E3 */
    "tagPositiveLightActive": "var(--token-7f88c7c1-6b9e-49a7-88bf-87a371a6379f, rgb(218, 240, 227))",
    /** #F0F9F4 */
    "tagPositiveLightDisabled": "var(--token-721823a3-14ba-4f3d-b3ff-a239d37cbbaa, rgb(240, 249, 244))",
    /** #368759 */
    "tagPositiveLightFont": "var(--token-17649280-2ad2-494b-bed3-989f96562be2, rgb(54, 135, 89))",
    /** #368759 */
    "tagPositiveLightFontHover": "var(--token-0b104b8c-3451-4e3c-ad1a-4681dd755cb5, rgb(54, 135, 89))",
    /** #3AA76D */
    "tagPositiveOutlinedBackground": "var(--token-672f254f-62b9-4537-80a6-48ef48891ed6, rgb(58, 167, 109))",
    /** #368759 */
    "tagPositiveOutlinedHover": "var(--token-02c99e51-503d-4abc-b3fb-e8fab796bf89, rgb(54, 135, 89))",
    /** #2B6B46 */
    "tagPositiveOutlinedActive": "var(--token-a018f64c-4ccf-49f0-8d9e-1c163a3afd95, rgb(43, 107, 70))",
    /** #F0F9F4 */
    "tagPositiveOutlinedDisabled": "var(--token-44ac2c0c-3867-4937-92ea-2adad522fa9d, rgb(240, 249, 244))",
    /** #368759 */
    "tagPositiveOutlinedFont": "var(--token-dcb1fc98-aa20-4b0a-9dba-312fa01b4c75, rgb(54, 135, 89))",
    /** #F0F9F4 */
    "tagPositiveOutlinedFontHover": "var(--token-0307a465-bf57-4d3e-816f-3c11d5812b38, rgb(240, 249, 244))",
    /** #AEDDC2 */
    "tagPositiveFontDisabled": "var(--token-6beaf8ef-7ad7-4416-bdfe-d6dc898195f6, rgb(174, 221, 194))",
    /** #ED6E33 */
    "tagWarningSolidBackground": "var(--token-e6495120-3d04-4094-899a-6816b41d2369, rgb(237, 110, 51))",
    /** #FEF3EF */
    "tagWarningSolidHover": "var(--token-f8b6b6af-a99f-4dc4-ba07-67ea3baf1fc5, rgb(254, 243, 239))",
    /** #FBE2D6 */
    "tagWarningSolidActive": "var(--token-06016719-1cd1-4666-a2e1-b788df97f277, rgb(251, 226, 214))",
    /** #FEF3EF */
    "tagWarningSolidDisabled": "var(--token-16fa553e-1395-4db4-b937-a767c5e57e82, rgb(254, 243, 239))",
    /** #FEF3EF */
    "tagWarningSolidFont": "var(--token-cac082ed-3812-4578-8d0f-8e02722757e0, rgb(254, 243, 239))",
    /** #B45427 */
    "tagWarningSolidFontHover": "var(--token-3d5cbf0f-de58-412b-bf25-5c901a496c64, rgb(180, 84, 39))",
    /** #FEF3EF */
    "tagWarningLightBackground": "var(--token-9d4da9a2-52ea-46fb-b46b-9992344109ab, rgb(254, 243, 239))",
    /** #FBE2D6 */
    "tagWarningLightHover": "var(--token-d569d267-6365-4dfd-9ec8-0549fbb222ea, rgb(251, 226, 214))",
    /** #FBE2D6 */
    "tagWarningLightActive": "var(--token-becfa311-ad9b-4674-9d98-53853013050c, rgb(251, 226, 214))",
    /** #FEF3EF */
    "tagWarningLightDisabled": "var(--token-af5a8393-f718-46a5-a21f-d09cfe6ca829, rgb(254, 243, 239))",
    /** #B45427 */
    "tagWarningLightFont": "var(--token-e1efe67c-3d45-4f3a-92e1-0144bc006154, rgb(180, 84, 39))",
    /** #B45427 */
    "tagWarningLightFontHover": "var(--token-ec87ab4e-5653-4357-87ec-6075f78eb909, rgb(180, 84, 39))",
    /** #ED6E33 */
    "tagWarningOutlinedBackground": "var(--token-5bc23d5e-4792-4d55-84d3-e2881c47c002, rgb(237, 110, 51))",
    /** #B45427 */
    "tagWarningOutlinedHover": "var(--token-1a068c76-fb94-4cc4-8c7d-fb5ef6dd8d57, rgb(180, 84, 39))",
    /** #8E421F */
    "tagWarningOutlinedActive": "var(--token-2c45e95e-abdf-4000-a961-d64265eb2ed3, rgb(142, 66, 31))",
    /** #FEF3EF */
    "tagWarningOutlinedDisabled": "var(--token-9d3bcecf-b120-4a30-b58d-1d867cbccc17, rgb(254, 243, 239))",
    /** #B45427 */
    "tagWarningOutlinedFont": "var(--token-134d0a3d-e1be-4c35-b19c-47b0296e852b, rgb(180, 84, 39))",
    /** #FEF3EF */
    "tagWarningOutlinedFontHover": "var(--token-83bd9c3b-cab0-42b9-9884-7206b857effa, rgb(254, 243, 239))",
    /** #F7BFA5 */
    "tagWarningFontDisabled": "var(--token-23fdfdc3-1ba6-44f5-a56d-728b7a4cba4d, rgb(247, 191, 165))",
    /** #D44333 */
    "tagNegativeSolidBackground": "var(--token-2c921afa-a907-41f8-9bc3-03dcd06bf8d8, rgb(212, 67, 51))",
    /** #FDF0EF */
    "tagNegativeSolidHover": "var(--token-d5ae3867-f0cc-46c1-b1e5-f3c1fefc6d9a, rgb(253, 240, 239))",
    /** #FADBD7 */
    "tagNegativeSolidActive": "var(--token-b898c5a3-babc-4503-9054-7636f6f78bca, rgb(250, 219, 215))",
    /** #FDF0EF */
    "tagNegativeSolidDisabled": "var(--token-ece38ee7-5703-4b90-a5fa-74276a43bb70, rgb(253, 240, 239))",
    /** #FDF0EF */
    "tagNegativeSolidFont": "var(--token-d9333d52-dd17-473c-8c17-a635028bf358, rgb(253, 240, 239))",
    /** #AE372A */
    "tagNegativeSolidFontHover": "var(--token-a24400cc-9579-41a4-8c2a-83411c9d20de, rgb(174, 55, 42))",
    /** #FDF0EF */
    "tagNegativeLightBackground": "var(--token-1ae399ed-79dc-48f7-bd1c-4708204b85ca, rgb(253, 240, 239))",
    /** #FADBD7 */
    "tagNegativeLightHover": "var(--token-8f1880bc-72a4-44e4-a2b9-d06c38199c84, rgb(250, 219, 215))",
    /** #FADBD7 */
    "tagNegativeLightActive": "var(--token-ce2ca9bc-4a33-42b6-a886-3569544ea4da, rgb(250, 219, 215))",
    /** #FDF0EF */
    "tagNegativeLightDisabled": "var(--token-75bf7c00-113e-46b0-bd54-078ceb7d2c11, rgb(253, 240, 239))",
    /** #AE372A */
    "tagNegativeLightFont": "var(--token-e5176975-5e7b-4b62-92d3-a02809ed661f, rgb(174, 55, 42))",
    /** #AE372A */
    "tagNegativeLightFontHover": "var(--token-ff642821-565e-4c03-8b52-fabde2d8294a, rgb(174, 55, 42))",
    /** #D44333 */
    "tagNegativeOutlinedBackground": "var(--token-64a28393-0d3a-4c84-bdbf-7a46f9c0d710, rgb(212, 67, 51))",
    /** #AE372A */
    "tagNegativeOutlinedHover": "var(--token-384d5478-e65a-46f8-81d7-59e13d505d0f, rgb(174, 55, 42))",
    /** #892C21 */
    "tagNegativeOutlinedActive": "var(--token-f5d95a4b-ba04-4cea-8069-b736f311adf5, rgb(137, 44, 33))",
    /** #FDF0EF */
    "tagNegativeOutlinedDisabled": "var(--token-db1abfb6-7085-44c8-b649-19807e33ca8c, rgb(253, 240, 239))",
    /** #AE372A */
    "tagNegativeOutlinedFont": "var(--token-38511b1b-c481-46d8-a2ac-a49b840789a4, rgb(174, 55, 42))",
    /** #FDF0EF */
    "tagNegativeOutlinedFontHover": "var(--token-2f0995db-d583-49e6-8e3a-8c8a0c2dc30a, rgb(253, 240, 239))",
    /** #F4AFA7 */
    "tagNegativeFontDisabled": "var(--token-b7a31971-1aad-44a0-80fc-4fa5347ad5f8, rgb(244, 175, 167))",
    /** #FFFFFF */
    "tableHeadBackgroundColor": "var(--token-2cec68c4-4cdf-4e60-be59-e71ab5c7f4b1, rgb(255, 255, 255))",
    /** #FFFFFF */
    "tableBackground": "var(--token-31764213-9242-439f-aa9f-eafc7fc45a4e, rgb(255, 255, 255))",
    /** #F6F6F6 */
    "tableStripedBackground": "var(--token-ab26e99e-7191-4d73-8b69-e67dddb3906b, rgb(246, 246, 246))",
    /** #AFAFAF */
    "tableFilter": "var(--token-c7dbde30-2d6e-40fa-a395-51d9500856c5, rgb(175, 175, 175))",
    /** #757575 */
    "tableFilterHeading": "var(--token-53453b4f-4452-4a16-b8f3-6084014c61e6, rgb(117, 117, 117))",
    /** #FFFFFF */
    "tableFilterBackground": "var(--token-8bc9495a-9b3f-436c-8a3a-e0c07c4176f2, rgb(255, 255, 255))",
    /** #F6F6F6 */
    "tableFilterFooterBackground": "var(--token-59e2ab1b-bc00-4fd8-b0fe-bbdd40f2d6a6, rgb(246, 246, 246))",
    /** #FFFFFF */
    "toastText": "var(--token-1a0706a6-39b4-411a-95be-70810665b484, rgb(255, 255, 255))",
    /** #757575 */
    "toastPrimaryBackground": "var(--token-8bc2601d-b692-4a6b-bdac-b5fc37b15d2a, rgb(117, 117, 117))",
    /** #1E54B7 */
    "toastInfoBackground": "var(--token-8846202c-aedd-4969-9c19-5aa8029842d2, rgb(30, 84, 183))",
    /** #368759 */
    "toastPositiveBackground": "var(--token-e7730a12-8fa7-4f3c-b79b-ac52cd793d2f, rgb(54, 135, 89))",
    /** #B45427 */
    "toastWarningBackground": "var(--token-ccadb836-7161-4703-9d7d-fa7f7299f050, rgb(180, 84, 39))",
    /** #AE372A */
    "toastNegativeBackground": "var(--token-fd4419f6-8588-4625-91d2-db4fcf717058, rgb(174, 55, 42))",
    /** #333333 */
    "spinnerTrackFill": "var(--token-d806abcf-68d8-4078-bb0c-e84e70cee906, rgb(51, 51, 51))",
    /** #333333 */
    "progressbarTrackFill": "var(--token-a9e0a89b-c451-4f41-a0ab-833c3239243a, rgb(51, 51, 51))",
    /** #333333 */
    "tooltipBackground": "var(--token-c60197c1-5fd0-4052-b372-dd898a2722a4, rgb(51, 51, 51))",
    /** #FFFFFF */
    "tooltipText": "var(--token-863195d8-1280-4b02-a5da-7b274d3ed200, rgb(255, 255, 255))",
})
