package ajax.domain;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor // new Item()으로 생성가능
@AllArgsConstructor // new Item(10L, "", "", "")으로 생성가능
@RequiredArgsConstructor // @NonNull인 속성으로 생성자 가능
@EqualsAndHashCode(exclude = {"type", "name", "image"})	// item1.equlas(item2)
public class Item {
	@NonNull
	private Long id;

	@NonNull
	private String type;

	@NonNull
	private String name;

	private String image;

}